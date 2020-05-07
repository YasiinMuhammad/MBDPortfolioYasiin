import React, { Component } from "react";
import { Timeline, Event } from "react-timeline-scribble";


class Edu extends Component {
    state = {
        edus: [
            {   interval: "2019-Current",
                title: "Freelance Web Developer",
                discription: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                
            },
            {   interval: "2015-2019",
                title: "Fox Restaurant Concepts | North Italia – Manager",
                subtitle: "Irvine, CA",
                discription: "Increase restaurant brand recognition and market share by implementing new brand and marketing strategies. Develop and oversee entire staff for restaurant with $10mil in annual sales.        Closely monitor the safety of the restaurant guests and staff by executing best practice food safety and restaurant safety standards and guidelines. Handle Human Resource staffing duties such as hiring, performance improvement plans, training, and evaluations for a staff of 40. Design, develop, and execute communication plans and public relations activities. Approve the quality / design of publications, advertising materials, and programs for events.",
                
            },
            {   interval: "2010 to 2015",
                title: "Fox Restaurant Concepts | The Greene House – Bartender Manager",
                subtitle: "Scottsdale, AZ",
                discription: "Developed guidelines for staff evaluations, staff advancement, and recruitment procedures for three managers. Maintained compliant operations by preparing policies and standard operating procedures. Liaised with the marketing department to develop content for innovative marketing campaigns. Ensured paperwork accuracy such as daily sales summary reports, cash reimbursement forms and receipts, and payroll records. Executed banquet and community events in partnership with neighborhood associations, community members, non-profits, and organizations.",
                
            },
            {   interval: "2007-2010",
                title: "Fox Restaurant Concepts | North Italia – Trainer & Server",
                subtitle: "Tucson, AZ",
                discription: "Trained staff employees on the correct facility procedures, safety codes, proper recipes, and plating techniques. Commended for multitasking abilities; frequently assigned closing shifts. Awarded the Employee of the Year in December 2007 for “above and beyond” service. Quickly promoted within six months from Server to Trainer. Commended for professional and bright personality.",
                
            },
           
        ]
    }
    render =() => {
        return (
            <div>
                <Education interval={this.state.edus[0].interval} title={this.state.edus[0].title} 
                subtitle={this.state.edus[0].subtitle} discription={this.state.edus[0].discription} >
                </Education>
                <Education interval={this.state.edus[1].interval} title={this.state.edus[1].title} subtitle={this.state.edus[1].subtitle} discription={this.state.edus[1].discription} >
                </Education>
                <Education interval={this.state.edus[2].interval} title={this.state.edus[2].title} subtitle={this.state.edus[2].subtitle} discription={this.state.edus[2].discription} >
                </Education>
                <Education interval={this.state.edus[3].interval} title={this.state.edus[3].title} subtitle={this.state.edus[3].subtitle} discription={this.state.edus[3].discription} >
                </Education>
                    
            </div>
        )
        }
        
};


const Education = (props) => {
    return (
        <div>
            <Timeline>
            <Event 
            interval={props.interval} title={props.title} subtitle={props.subtitle}>
            <p className="edu3">{props.discription}</p>
            </Event>
            </Timeline>
            
        </div>
    )
}

export default Edu;
