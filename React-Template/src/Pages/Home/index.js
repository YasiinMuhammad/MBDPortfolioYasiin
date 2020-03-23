import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';
import "./style.css";
import Logo from "../../Components/Logo/logo";
import Name from "../../Components/Logo/name";



function Home() {
    return (
        <div id="intro-section">
            <div id="intro-section-overlay">
            <MDBContainer className="main d-flex align-items-center  justify-content-center h-100 mask waves-effect waves-light" fluid={true} >
                <MDBRow className="d-flex -flex justify-content-center text-center">
                <MDBCol className="s mb-4  text-center">
                    <Logo />
                    <Name />
                        <a href="/contact" className="btn btn-rounded btn-outline-white">
                            <i className="fa fa-home"></i> Contact Me!
                            </a> 
                        </MDBCol>
                        </MDBRow>
        </MDBContainer>
        </div>
        </div>

            );
        }
        
export default Home;
