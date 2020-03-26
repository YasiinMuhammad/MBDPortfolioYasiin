import React from "react";
import "./style.css";
import Projects from '../../Components/Projects/projects'
import { MDBRow, MDBCol, MDBCardImage, MDBContainer, MDBJumbotron, MDBCardHeader } from 'mdbreact';


function Portfolio() {
    return (
        <React.Fragment>
            <div className="portfolio-page mdb-color darken-3t " id="portfolio">
                <MDBCardHeader className="cardHead mask pl-5 " color="red accent-3 lighten-1" style={{ fontSize: "65px", paddingTop: "75px" }}>My Projects</MDBCardHeader>
                    <MDBContainer className=" justify-content-center" >
                        <article className="portfolio-page-content ">
                            <MDBCol>
                                <MDBRow className="portfolio-header">
                                    <p className="portfolio-name text-white" style={{ fontSize: "65px" }}>What I've created so far </p>
                                </MDBRow>
                            </MDBCol>
                                    <MDBJumbotron className="portfolio-jumbo teal accent-4 " >
                                        {/* <MDBContainer > */}
                                        {/* <MDBRow> */}
                                            <MDBCol className="text-white  justify-content-center align-content-center" style={{ fontSize: "16px" }} >

                                                <Projects />
                                                
                                            </MDBCol>
                                        {/* </MDBRow> */}
                                        {/* </MDBContainer> */}
                                    </MDBJumbotron>
                             

                        </article>
                        
                    </MDBContainer>

                </div>
          
        </React.Fragment>
    );
}

export default Portfolio;
