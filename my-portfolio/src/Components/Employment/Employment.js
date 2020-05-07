import React, { Component } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import "./style.css";


class Employment extends Component {
    state = {
        emps: [
            {   interval: "2019",
                subtitle: "University of Arizona | Chandler, AZ",
                title: "Full-Stack Web Development Certificate",
                
                
            },
            {   interval: "2013",
                subtitle: "Arizona State University | Tempe, AZ",
                title: "Bachelor of Science in Communication",
                
                
            },
            
           
        ]
    }
    render =() => {
        return (
            <div>
                <Emp interval={this.state.emps[0].interval} title={this.state.emps[0].title} 
                subtitle={this.state.emps[0].subtitle} discription={this.state.emps[0].discription} >
                </Emp>
                <Emp interval={this.state.emps[1].interval} title={this.state.emps[1].title} 
                subtitle={this.state.emps[1].subtitle} discription={this.state.emps[1].discription} >
                </Emp>
                     
            </div>
        )
        }
        
};

const Emp = (props) => {
    return (
        <div>
            <Timeline>
            <Event 
            interval={props.interval} title={props.title} subtitle={props.subtitle}>
            </Event>
            </Timeline>
            
        </div>
    )
}

export default Employment;
