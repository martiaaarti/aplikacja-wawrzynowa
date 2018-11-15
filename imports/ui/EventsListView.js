import React, { Component } from 'react';

import EventPanel from './EventPanel.js';
import Switch from './SwitchButton.js'


export default class EventsListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { eventsList }= this.props 

        return (
            <div>
                <div className="d-flex justify-content-end"><Switch /></div>
                <EventPanel id="single-events" eventType='Wydarzenia pojedyncze' />
                <EventPanel id="recurring-events" eventType='Wydarzenia cykliczne' />
            </div>
        )
    }
}