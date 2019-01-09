import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EventsListView from './EventsListView.js';
import EventsCalendarView from './EventsCalendarView.js';
import SwitchButton from './SwitchButton.js';




export default class EventsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalendarSelected: false
        };
        this.onNavigate = this.onNavigate.bind(this);
    }

    onNavigate(isCalendarSelected) {
        this.setState({ isCalendarSelected });
    }


    render() {
        return (
            <div>
                
                <SwitchButton onNavigate={this.onNavigate} isCalendarSelected={this.state.isCalendarSelected} />

                {this.state.isCalendarSelected ? <EventsCalendarView /> : <EventsListView />}

            </div>

        )
    }
}

EventsView.propType = {
    onNavigate: PropTypes.func.isRequired
};



