import React, { Component } from 'react';
import me from '../images/me.png'
import './about.css';

export default class About extends Component {
    render() {
        return(
            <div className="col-xs-12 col-xl-8 offset-xl-2">
                <div className="pagebox pt-4 pb-4 shadow-lg">
                    <div className="row justify-content-center col-12 text-white pr-0 pl-0 ml-0 mr-0">
                        <div className="col-12 col-md-10 col-lg-6 pt-3 pl-0 pr-0">
                            <div className="row justify-content-center">
                                <div className="pb-3">
                                    <img src={me} className="biopicture" alt="bio-pic" />
                                </div>

                                <div className="pl-3">
                                    <h3 className="textyellow textspaced"><u>Player Info</u></h3>
                                    <ul className="no-bullets raleway pl-0">
                                        <li><b>Name:</b> Manmeet Dhoot</li>
                                        <li><b>Location:</b> Brampton, ON</li>
                                        <li><b>Occupation:</b> Web Developer</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="raleway text-center col-xs-12 col-xl-10 offset-xl-1 pt-2 pl-1 pr-1">
                                Manmeet Kaur Dhoot is a  Web  Developer who is also certified in Salesforce Administration.
                                She is well versed in React, React Native, Web3, JavaScript, and traditional web languages such as CSS and HTML. <br /><br />
                                Having embraced development at a rapid pace, he has built numerous progressive web and mobile application prototypes.
                                
                            </p>
                        </div>


                        <div className="col-12 col-md-10 col-lg-6 pt-3 pl-2 pr-2">
                            <h3 className="textblue textspaced"><u>Coder Details</u></h3>
                            <ul className="raleway pb-2">
                                <li className="brief-item">Embraces challenges.</li>
                                <li className="brief-item">Solutions driven.</li>           
                                <li className="brief-item">Self-motivated.</li>      
                                <li className="brief-item">Excellent team player.</li> 
                                <li className="brief-item">Great communication skills.</li>     
                                <li className="brief-item">Experienced in IT and Administration.</li>           
                            </ul>
                            <div className="row pr-0 ml-0 pt-2">
                                <h4 className="textpink textspaced pr-2">Favorities: </h4>
                                <h5 className="text-white raleway smallheader pt-1">Painting, Reading</h5>
                            </div>
                            <div className="row pr-0 ml-0 pt-2">
                                <h4 className="textpink textspaced pr-2">Skills: </h4>
                                <h5 className="text-white raleway smallheader pt-1">Coding, Music, Photography</h5>
                            </div> 
                        </div>                        
                    </div>

                    
                    
                </div>
            </div>
        )
    }
}