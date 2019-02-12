import React, { Component } from 'react';
import { Container } from 'reactstrap';

import EventsListView from './EventsListView.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from '/db/index.js';
import PropTypes from 'prop-types';
import { eventPropTypes } from './types/eventPropTypes.js';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container className="w-100 h-95">
                <EventsListView events={this.props.events} />
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
    events: PropTypes.arrayOf(eventPropTypes).isRequired,
};

