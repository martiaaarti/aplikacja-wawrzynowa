import React, { Component } from 'react';
import { Container } from 'reactstrap';

import MainPageLayout from './MainPageLayout.js';


// MainPage component - represents a main content of the app
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="main-page-content">
            <MainPageLayout/>                
            </Container>
        )
    }
}