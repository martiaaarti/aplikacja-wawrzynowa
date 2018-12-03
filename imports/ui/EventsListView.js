import React, { Component } from 'react';

import EventPanel from './EventPanel.js';
import Switch from './SwitchButton.js';
import PropTypes from 'prop-types';


export default class EventsListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div className="d-flex justify-content-end"><Switch /></div>
                <EventPanel id="single-events" eventType='Wydarzenia pojedyncze' events={this.props.events} />
                <EventPanel id="recurring-events" eventType='Wydarzenia cykliczne' events={this.props.events} />
            </div>
        )
    }
}

EventsListView.propTypes = {
    events: PropTypes.array.isRequired,
};
