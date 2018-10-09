import React, { Component } from 'react';




// Header component - represents a header menu
export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
            {/* Zamieszczam logo duszpasterstwa jako "dom" */}
                <div className="logo">
                    <a href="#">
                        <img src="../img/wawrzynyprzezroczystetlo.svg" alt="Wawrzyny"/>
                        {/* style="width:300px; height:100px; object-fit: cover" */}
                    </a>
                </div>
                <div className="go-right">
                    <div className="title">
                        <h1>Wawrzyn</h1>
                    </div>

                    {/* Zamieszczam ikone ustawien */}
                    <div className="setting-list">
                        <a href='#' title= "setting"></a>                        
                    </div>
                </div>                
            </div>
        )
    }
}