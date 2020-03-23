import React from "react";
import "./style.css";
import axios from 'axios';
import { MDBContainer, MDBInput, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCardHeader, MDBJumbotron } from "mdbreact";
import Logo from '../../Components/Logo/logo'


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            subjectLine: '',
            body: '',
            email: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        alert('A email was submitted by: ' + this.state.name);
        e.preventDefault();

        axios.post('http://localhost:3000/contacts', this.state).then(req => {
            console.log(this.state);

        });

    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {

        const { name, subjectLine, body, email } = this.state;

        const isEnabled = email.length > 0 && subjectLine.length > 0 && body.length > 0 && name.length > 0;

        return (
            <div className="contact mdb-color darken-3t" id="contact">
                <div className="contact-page-layout">
                <MDBCardHeader className="cardHead mask pl-5 " color="red accent-3 lighten-1" style={{ fontSize: "65px", paddingTop: "75px" }}>Contact Me!
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
                        <form>
                            <div className="white-text">
                                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                            </div>
                            <div className="text-center">
                                <MDBBtn outline color="white">
                                    Send
                                <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </form>
                        </MDBCol> 
                        <MDBCol className="d-flex align-items-center  justify-content-center"md="6" >
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