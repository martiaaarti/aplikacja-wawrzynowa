import React, {Component} from 'react';

import EventsListView from './EventsListView.js';
import Switch from './SwitchButton.js';



export default class EventsView extends Component {
    constructor(props) {
        super(props);
        this.state = {isCalendarSelected: false};
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-end"><Switch/></div>
              
                <EventsListView/>
            
            </div>
        )
    }
}



