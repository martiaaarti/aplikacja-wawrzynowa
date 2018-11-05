import React, { Component } from 'react';
import { Container } from 'reactstrap';

import MainViewEventsList from './MainViewEventsList.js';


// MainPage component - represents a main content of the app
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="w-100 h-100">
                <MainViewEventsList/>
            </Container>
        )
    }
}