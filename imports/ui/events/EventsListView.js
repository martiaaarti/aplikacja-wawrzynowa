import React, { Component } from 'react';

import EventPanel from './EventPanel.js';



export default class EventsListView extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>     
                <EventPanel id="single-events" eventType='Wydarzenia pojedyncze'/>
                <EventPanel id="recurring-events" eventType='Wydarzenia cykliczne'/>
            </div>
        )
    }
}