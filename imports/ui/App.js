import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //sprawdzić czy jest potrzebna
 
import Header from './Header.js';
import MainPage from './MainPage.js';
import Footer from './Footer.js';
 
// App component - represents the whole app

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header/>            
                <MainPage/>
                <Footer/>
            </div>
        )
    }
}
// renderuje to co mam w return()