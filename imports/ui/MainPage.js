import React, { Component } from 'react';
import { Container } from 'reactstrap';

import EventsListView from './EventsListView.js';
import Events from './Events.js';


// MainPage component - represents a main content of the app
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    getEvents() {
        return [
          { _id: 1, text: 'This is task 1' },
          { _id: 2, text: 'This is task 2' },
          { _id: 3, text: 'This is task 3' },
        ];
      }
     
      renderEvents() {
        return this.getEvents().map((event) => (
          <Events key={event._id} event={event} />
        ));
      }

    render() {
        return (
            <Container className="w-100 h-100">
                <EventsListView />{this.renderEvents()}
            </Container>
        )
    }
}