import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import Header from './Header.js';
import MainPage from './MainPage.js';
import Footer from './Footer.js';

library.add(faFacebook, faYoutube, faCog)

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <Header/>            
                <MainPage/>
                <Footer/>
            </div>
        )
    }
}
