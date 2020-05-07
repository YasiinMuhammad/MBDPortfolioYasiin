import React from "react";
import Typing from 'react-typing-animation';


const name = () => (
    <Typing speed={145}>
        <h3 className="display-3 " style={{ color: "#00bfa5" }}>Yasiin Muhammad </h3>
        <Typing.Speed ms={100} />
        <hr className="hr-light my-4 w-75" />
        <h4 className="subtext-header mt-2  mb-4 "style={{ color: "#00bfa5" }}>Web Designer / Full Stack Developer</h4>
    
    </Typing>
);


export default name;