import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';

import EventsView from './EventsView.js';
import EventDescription from './EventDescription.js';


export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="w-100 h-100">
                <div>
                    <Route exact path="/" render={() => (
                        <EventsView/>
                    )}/> 

                    <Route path="/description" render={() => (
                        <EventDescription/>
                    )}/>             
                </div>            
            </Container>
        )
    }
}