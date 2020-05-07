import React from "react";
import "./style.css";
import axios from 'axios';
import { MDBContainer, MDBInput, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCardHeader, MDBJumbotron } from "mdbreact";
import Logo from '../../Components/Logo/logo'
import Recaptcha from "react-recaptcha";

const initialState = {
    name: '',
    subjectLine: '',
    body: '',
    email: '',
    isVerified: false,

};

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            subjectLine: '',
            body: '',
            email: '',
            isVerified: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    };

    recaptchaLoaded() {
        // console.log("working")
    }

    handleVerfied() {
        if (this.state.isVerified) {
            alert("please verify")
        }
    }
    verifyCallback(response) {
        if (response) {
            this.setState({
                isVerified: true
            })
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    validate = () => {
        let nameError = "";
        let emailError = "";
        let bodyError = "";
        let subjectLineError = "";

        if (!this.state.name) {
            nameError = "name cannot be blank";
        }

        if (!this.state.body) {
            bodyError = "body cannot be blank";
        }

        if (!this.state.subjectLine) {
            subjectLineError = "body cannot be blank";
        }


        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || nameError || bodyError || subjectLineError) {
            this.setState({ emailError, nameError, bodyError, subjectLineError });
            return false;
        }

        if (!this.state.isVerified) {
            alert("Please Verify that you are human")
            return false;
        }

        return true;
    };


    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        const isValid = this.validate();
        if (isValid) {
            axios.post('http://localhost:5000/contacts', this.state).then(res => {
                alert('A email was submitted by: ' + this.state.name);
            });
            // clear form
            this.setState(initialState);
        }

    };


    render() {

        const { name, subjectLine, body, email } = this.state;

        const isEnabled = email.length > -1 && subjectLine.length > -1 && body.length > -1 && name.length > -1;

        return (
            <div className="contact mdb-color darken-3t" id="contact">
                <div className="contact-page-layout">
                    <MDBCardHeader className="cardHead mask pl-5 " color="red accent-3 lighten-1" style={{ fontSize: "45px", paddingTop: "75px" }}>Contact Me!
                </MDBCardHeader>
                    <article className="contact-page-content ">
                        <MDBContainer className="contactPage">
                            <MDBRow>
                                <MDBCol>
                                    <p className="contactHead" style={{ fontSize: "45px" }}>
                                        I WILL BE GLAD TO ANSWER YOUR QUESTIONS!
                         </p>
                                </MDBCol>
                            </MDBRow>

                            <MDBJumbotron className="about-jumbo teal accent-4" >
                                <MDBRow>
                                    <MDBCol md="6">
                                        <form id="contact-form" method="POST" action="/contacts" onSubmit={this.handleSubmit}>
                                            <div className="white-text">
                                                <MDBInput type="text" onChange={this.handleChange} value={name} name="name" label="Your name" icon="user" />
                                                <div style={{ fontSize: 20, color: "red" }}> {this.state.nameError} </div>

                                                <MDBInput onChange={this.handleChange} value={email} name="email" label="Your email" icon="envelope" group type="email"
                                                />
                                                <div style={{ fontSize: 20, color: "red" }}> {this.state.emailError} </div>
                                                <MDBInput onChange={this.handleChange} value={subjectLine} name="subjectLine" label="Subject" icon="tag" group type="text" />
                                                <div style={{ fontSize: 20, color: "red" }}> {this.state.subjectLineError} </div>

                                                <MDBInput onChange={this.handleChange} value={body} name="body" type="text" label="Your message" icon="pencil-alt" />
                                                <div style={{ fontSize: 20, color: "red" }}> {this.state.bodyError} </div>
                                            </div>
                                            <MDBRow style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Recaptcha sitekey="6LdJivMUAAAAAH-G19hC2Ez02glwi1f5aUli7l3J" render="explicit" onloadCallback={this.recaptchaLoaded} verifyCallback={this.verifyCallback} />
                                                <div style={{ fontSize: 20, color: "red" }}> {this.state.bodyError} </div>
                                            </MDBRow>
                                            <div className="text-center">
                                                <MDBBtn type="submit" disabled={!isEnabled} name="isEnabled" outline color="white">
                                                    Send
                                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                                                </MDBBtn>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <a href="https://github.com/YasiinMuhammad">
                                                <MDBIcon href="https://github.com/YasiinMuhammad" style={{ fontSize: "25px", color: "white" }} fab icon="github" />
                                            </a>
                                             &nbsp;
                                             <a href='https://www.linkedin.com/in/yasiin-58b96b91/'>
                                                <MDBIcon style={{ fontSize: "25px", color: "white" }} fab icon="linkedin-in" />
                                            </a>
                                        </div>
                                    </MDBCol>
                                    <MDBCol className="d-flex align-items-center  justify-content-center" md="6" >
                                        <div>
                                            <Logo />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBJumbotron>

                        </MDBContainer>
                    </article>
                </div>
            </div>
        );
    }
}

export default Contact;