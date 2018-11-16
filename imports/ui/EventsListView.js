import React, { Component } from 'react';

import EventPanel from './EventPanel.js';
import Switch from './SwitchButton.js'


export default class EventsListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div className="d-flex justify-content-end"><Switch /></div>
                <EventPanel id="single-events" eventType='Wydarzenia pojedyncze' eventsPassedFromPanel={this.props.eventsPassedFromListView}/>
                <EventPanel id="recurring-events" eventType='Wydarzenia cykliczne' eventsPassedFromPanel={this.props.eventsPassedFromListView}/>
            </div>
        )
    }
}