import React, { Component } from 'react';

import EventPanel from './EventPanel.js';
import Switch from './SwitchButton.js';
import PropTypes from 'prop-types';

const eventTypes = [
    {
        title: "Wydarzenia pojedyncze",
        id: "single-events"
    },
    {
        title: "Wydarzenia cykliczne",
        id:"recurring-events"
    }
];

export default class EventsListView extends Component {
    constructor(props) {
        super(props);
    }    

    render() {

        return (
            <div>
                <div className="d-flex justify-content-end"><Switch /></div>
                {eventTypes.map((eventType) => (
                    <EventPanel 
                    key = {eventType.id} 
                    eventType={eventType.title}                    
                    events={this.props.events} 
                    />

                ))}
            </div>
        )
    }
}

EventsListView.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired
};
