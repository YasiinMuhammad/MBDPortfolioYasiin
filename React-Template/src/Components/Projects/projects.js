import React, { Component } from "react";
import Burger from './img/eatMoreBurger.png'
import Recipe from './img/recipeTown.png'
import Shelter from './img/sureShelter.png'
import { MDBCardGroup, MDBCardImage, MDBBtn, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBCardHeader } from "mdbreact";
const ProjectData = [

    {
        title: "Eat the Burger",
        text: "This exercise is a full stack development using the MVC framework. It uses a front-end of HTML/CSS and handlebars. The back-end uses node-js, express, and handlebars. Data is kept in a MYSQL database.",
        tech: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
        link: <a href="https://boiling-castle-88722.herokuapp.com">Find out more</a>,
        image: Burger


    },
    {
        title: "Sure Shelter",
        text: "Sure Shelter is a web-based application allowing users to search for Homeless Shelters in their area, as well as allowing companies to sign up to donate goods or services.",
        tech: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
        link: <a href="https://blueberry-cake-83079.herokuapp.com">Find out more</a>,
        image: Shelter
    },

    {
        title: "Friend Finder",
        text: "In need of a friend? Oh boy, time to get on our app, and find that special someone. After filling out a quick survey, our friend-matching algorithm will pair you with an individual in our network.",
        tech: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
        link: <a href="https://boiling-castle-88722.herokuapp.com">Find out more</a>,
        // image: Friend
    },

    {
        title: "Recipe Town",
        text: "The responsive application allows users to research recipes of their choice and displays generated recipes on the main page",
        tech: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
        link: <a href="https://boiling-castle-88722.herokuapp.com">Find out more</a>,
        image: Recipe
    },
];
class Project extends Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }
    componentWillMount() {
        this.setState({
            posts: ProjectData
        });
    }


    render() {
        return <div>
            <div className="app-card-list" >
                <MDBCardGroup>
                    {
                        Object
                            .keys(this.state.posts)
                            .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)
                    }
                </MDBCardGroup>
            </div>
        </div>
    }
}
class CardHeader extends React.Component {
    render() {
        const { image } = this.props;

        return (
            <MDBCardHeader className="card-header p-0 m-1" >
                <MDBCardImage className="img-fluid" src={image} waves />

                <p className="card-header--title">{this.props.title}</p>
            </MDBCardHeader>
        )
    }
}


class CardBody extends React.Component {
    render() {
        return (
            <MDBCardBody className='card-body p-1'>

                <p style={{ fontWeight: "bold", fontSize: "32px" }}>{this.props.title}</p>

                <p className="body-content">{this.props.text}</p>

            </MDBCardBody>
        )
    }
}
class Button extends React.Component {
    render() {
       
        return (
            <MDBBtn className="button button-primary" >
                <i className="fa fa-chevron-right text-white"> {this.props.link}</i> 
      </MDBBtn>
        )
    }
}


class Card extends React.Component {
    render() {
        return (
            // <MDBRow className="row row-cols-md-4" >
            <MDBCol className="mb-4">
                <MDBCard style={{
                    width: "18rem", backgroundColor: "#45526e", borderStyle: "solid",
                    borderWidth: "5px", borderColor: "white"}}>
                    <CardHeader category={this.props.details.title} image={this.props.details.image} />
                    <CardBody title={this.props.details.title} text={this.props.details.text} />
                    <Button link={this.props.details.link}/>
                </MDBCard>
            </MDBCol >
            // </MDBRow>
        )
    }
}

export default Project;