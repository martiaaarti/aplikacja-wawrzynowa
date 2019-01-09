import React, { Component } from 'react';

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

                {this.state.isCalendarSelected === false && (
                    <EventsListView />
                )}
                {this.state.isCalendarSelected === true && (
                    <EventsCalendarView />
                )}

            </div>

        )
    }
}



