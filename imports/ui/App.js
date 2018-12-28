import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import Header from './Header.js';
import MainPage from './MainPage.js';
import Footer from './Footer.js';
import {setupFontAwesome} from './fontAwesomeSetup';

setupFontAwesome();

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
