import React from "react";
import "./style.css";
import { MDBRow, MDBCol, MDBCardImage, MDBContainer, MDBJumbotron, MDBCardHeader } from 'mdbreact';


function About() {
    return (
        <React.Fragment>
            <div className="about-page mdb-color darken-3t " id="about">
                <MDBCardHeader className="cardHead mask pl-5 " color="red accent-3 lighten-1" style={{ fontSize: "45px", paddingTop: "75px" }}>About Me!</MDBCardHeader>
                <MDBContainer className="main justify-content-center" >
                    <article className="about-page-content ">
                        <MDBCol>
                            <MDBRow className="about-header">
                                <p className="about-name text-white" style={{ fontSize: "45px" }}>Hi, I'm Yasiin Muhammad </p>
                            </MDBRow>
                        </MDBCol>
                        <MDBJumbotron className="about-jumbo teal accent-4" >
                            <MDBRow>
                                <MDBCol className="about-pic" style={{ width: "30rem" }}>
                                    <MDBCardImage style={{ width: "30rem" }} className="img-fluid" src={require("./img/2020-03-20-16-41-45.png")} />
                                </MDBCol>
                                <MDBCol className="about-statment pl-5 text-white" style={{ width: "22rem", fontSize: "25px" }} >
                                    <p className="about-text">- I'm a Full-Stack developer specializing in creating fun and dynamic web pages.  </p>

                                    <p>I started my journey into developing in 2017, taking a few classes online and, then eventually attending The University of Arizona Coding Bootcamp. I am a naturally inquisitive person who loves to tinker away and figure out how things work.</p>

                                    <p>I have built web applications using React.js, Express.js, Node.js along with other development tools. I have a strong fundamental and foundation in web design and development.</p>
                                    <a href="/contact" className="btn btn-rounded btn-outline-white">
                                        <i className="fa fa-home"></i> Contact Me!
                            </a>
                                </MDBCol>
                            </MDBRow>
                        </MDBJumbotron>
                    </article>
                </MDBContainer>

            </div>

        </React.Fragment>
    );
}

export default About;
