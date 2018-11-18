import React, { Component } from 'react';
import { Container } from 'reactstrap';

import EventsListView from './EventsListView.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';
import PropTypes from 'prop-types';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Container className="w-100 h-100">
                <EventsListView eventsPassedFromListView={this.props.events} />
            </Container>
        )
    }
}

export default withTracker(() => {
    return {
        events: Events.find({}).fetch(),
    };
})(MainPage);

MainPage.propTypes = {
    events: PropTypes.array.isRequired,
};

