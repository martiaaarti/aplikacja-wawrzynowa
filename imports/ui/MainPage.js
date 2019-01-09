import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';

import EventsView from './EventsMainView/EventsView.js';
import EventDescription from './EventsDescriptionView/EventDescription.js';


export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="w-100 h-100">
                <div>
                    <Route exact path="/" component={EventsView}/> 

                    <Route path="/description/:eventId" render={(props) => (
                    <EventDescription
                    id={props.match.params.eventID}
                    />
                    )}/>             
                </div>            
            </Container>
        )
    }
}