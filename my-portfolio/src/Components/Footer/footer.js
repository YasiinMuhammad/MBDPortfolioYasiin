import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import "./style.css";

const Footer = () => {
  return (
    <MDBFooter color="" className="font-small ">
      <div className="footer-copyright text-center py-1">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.YasiinMuhammad.com"> YasiinMuhammad.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;