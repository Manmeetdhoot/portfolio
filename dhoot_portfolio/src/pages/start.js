import React, { Component } from 'react';
import start from '../images/start.png'
import './start.css';
import TypeWriter from "react-typewriter";

export default class Start extends Component {
    render() {
        var name = "Manmeet Kaur Dhoot";
        return(
           
            <div className="row justify-content-center ml-0 mr-0"> 
                <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 pt-5 mt-5 text-center">
                <h1 className="responsive-headline">
                    <TypeWriter typing={0.5}>{name ?`I'm ${name}.` : null}</TypeWriter>
                </h1>
                    <img src={start} className="startimage" onClick={this.props.onClick} alt="start" />
                    <p className="starttext blink_me textspaced" onClick={this.props.onClick}>START CODING</p>
                </div>
            </div>
            
        )
    }
}