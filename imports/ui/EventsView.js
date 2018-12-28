import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import EventsListView from './EventsListView.js';
import Switch from './SwitchButton.js';
import EventDescription from './EventDescription.js';




export default class EventsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalendarSelected: false,
        };
    }
    

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                     <div>
                     <div className="d-flex justify-content-end"><Switch/></div>              
                     <EventsListView/>  
                     </div>
                )}/>
               <Route path="/description" render={() => (
                <EventDescription/>
               )} />
            </div>
        )
    }
}


