import React, { Component } from 'react';
import './header.css';
import './icomoon.css';
import TypeWriter from "react-typewriter";
import LevelInfo from './levelInfo';
import Avatar from './avatar';
import PlayerInfo from './playerInfo';

export default class Header extends Component {

    render() {

        return(
            <div className="row">
                <div className="col-xs-12 col-xl-6">
                    <div className="row headerbox shadow-lg">
                        <div className="col-8 col-sm-8 pl-2 ml-0">
                            <PlayerInfo /> 
                        </div>
                        <div className="col-4 col-sm-4 pt-0 pl-0 pr-0 mr-0 ml-0">
                            <Avatar />
                        </div>
                    </div>
                </div>
    <TypeWriter />
                <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-3 offset-xl-3">

                    {this.props.page === 'START' || this.props.page === 'MENU' || this.props.page === 'PLAYER' 
                    ? null 
                    : <LevelInfo page={this.props.page} onClick={this.props.onClick} />}
                </div>
            </div>
        )
    }
}

/* col-lg-3 col-md-3 col-sm-12 pt-3 */

/*

<div className="col-lg-9 col-md-10 col-sm-12 pl-3 ml-0">
    <PlayerInfo /> 
</div>
<div className="d-flex align-items-center justify-content-center col-lg-3 col-md-2 col-sm-12 pt-3 ">
    <Avatar />
</div>

*/