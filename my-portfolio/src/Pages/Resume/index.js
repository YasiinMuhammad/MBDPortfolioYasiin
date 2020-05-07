import React from "react";
import "./style.css";
import Employment from "../../Components/Employment/Employment"
import Education from "../../Components/Education/Education"
import { MDBRow, MDBCol, MDBContainer, MDBJumbotron, MDBCardHeader } from 'mdbreact';


function Resume() {
    return (
        <React.Fragment>
            <div className="resume-page mdb-color darken-3t " id="resume">
                <MDBCardHeader className="cardHead mask pl-5 " color="red accent-3 lighten-1" style={{ fontSize: "45px", paddingTop: "75px" }}>My Resume</MDBCardHeader>
              
                <MDBContainer className=" justify-content-center pb-5" >
                    <MDBCol>
                        <MDBRow className="about-header">
                            <p className="about-name text-white" style={{ fontSize: "45px" }}>My Accomplishments</p>
                        </MDBRow>
                    </MDBCol>
                    <MDBJumbotron className="resume-jumbo teal accent-4 " >
                        <article id="resume">
                            <div className="inner-wrapper">
                                <MDBRow className="resume-header">
                                    <MDBCol className="resume-img" >
                                        <img alt='resume profile pic' style={{ maxHeight: "200px" }} className="img-thumbnail" src={require("./2020-03-27-16-54-26.png")} />
                                    </MDBCol>

                                    <MDBCol className="resume-discription mt-4">
                                        <h1>YASIIN MUHAMMAD</h1>
                                        <h5>FULL STACK DEVELOPER</h5>
                                      
                                        <a className="email-button text-white " href="/contact"> <i className="far fa-envelope text-white mt-2"></i> YMtechstudio@gmail.com</a>
                                    </MDBCol>

                                    <MDBCol className="resume-links" >
                                        <MDBRow>
                                            <p className="mobile mt-5 text-white" style={{ fontSize: "20px" }}> <i className="fas fa-mobile-alt"></i> (602) 397-5820</p>
                                           
                                        </MDBRow>
                                        <MDBRow className="linkedin-row">
                                            <p style={{ fontSize: "20px" }}> <i className="fab fa-linkedin"></i>
                                                <a href='www.linkedin.com/in/yasiin-58b96b91' className="linkedin" > LinkedIn</a></p>
                                        </MDBRow>
                                        <MDBRow className="git-row">
                                            <p style={{ fontSize: "20px" }}> <i className="fab fa-github-square"> </i>
                                                <a href='https://github.com/YasiinMuhammad' className="git-hub" > GitHub</a> </p>
                                        </MDBRow>
                                    </MDBCol>

                                </MDBRow>
                                <MDBRow className="resume-body">
                                    <section className="career-summary">
                                        <h3>Career Objective:</h3>
                                    </section>
                                    <div className="career-body">
                                        <p>Highly motivated Designer adept at conceptualizing, designing and maintaining product interfaces to foster exceptional user experiences. Solid understanding of grid-based layout, typography, color, and other design principles. Expertise in user interface and visual design work. Proven experience developing consumer-focused websites using HTML, CSS, JavaScript, JQuery, Bootstrap, basic PHP, and MySQL. Skilled in building products for desktop, and mobile app users, while meeting the highest standards for web design, user experience, best practices, usability, and speed. </p>
                                    </div>
                                </MDBRow>
                                <MDBRow className="experience-body">
                                    <MDBCol className="work-experience" >
                                        <section className="work-header"> <h3> Work Experience</h3> </section>
                                        <div className="work">
                                            <Education />
                                        </div>
                                    </MDBCol>
                                    <MDBCol className="skills" >
                                        <section className="work-header"><h3>Skills & Tools</h3></section>
                                        <MDBRow>
                                            <Employment />

                                            <MDBCol>
                                                <MDBRow ><i className="fab fa-react"></i></MDBRow>
                                                <MDBRow ><i className="fab fa-node"></i></MDBRow>
                                                <MDBRow ><i className="fab fa-html5"></i></MDBRow>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBRow ><i className="fab fa-css3-alt"></i></MDBRow>
                                                <MDBRow ><i className="fab fa-js"></i></MDBRow>
                                                <MDBRow ><img alt="jQurey" src="https://img.icons8.com/ios-filled/64/000000/jquery.png"></img></MDBRow>
                                            </MDBCol>
                                            <MDBRow>
                                                <MDBCol ><img alt="mysql" src="https://img.icons8.com/ios/55/000000/mysql-logo.png"></img></MDBCol>
                                                <MDBCol sm="8"><img alt="mongoLogo" src="https://img.icons8.com/color/58/000000/mongodb.png"></img></MDBCol>

                                            </MDBRow>

                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>

                            </div>

                        </article>
                    </MDBJumbotron>


                </MDBContainer>

            </div>

        </React.Fragment>
    );
}

export default Resume;