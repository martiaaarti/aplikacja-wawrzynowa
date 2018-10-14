import React, { Component } from 'react';




// Header component - represents a header menu
export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                    <div className="header">
                        <div className="logo">
                            <a href="#">
                                <img  src="/img/backgroundMinistryLogo.svg"  alt="Wawrzyny"/>
                            </a>
                        </div>
                        <div className="go-right">
                            <div className="title">
                                <h1>Wawrzyn</h1>
                            </div>
                            <div className="settings-list">
                                <a href='#' title= "setting">
                                    <img className="" src=""  alt="Ustawienia"/>
                                </a>                        
                            </div>
                        </div>                
                    </div>
                )
            }
        }