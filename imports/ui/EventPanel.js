import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Event from './Event.js';
import { eventPropTypes } from './types/eventPropTypes.js';

export default class EventPanel extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isMainCardOpen: false };
    }
     
    renderEvents() {
        return this.props.events.map((eventsList) => (
          <Event key={eventsList._id} eventsList={eventsList} className="py-2"/>
        ));
      }

    toggle() {
        this.setState({ isMainCardOpen: !this.state.isMainCardOpen });
    }

    render() {
        const { eventType } = this.props

        return (
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Card id={`${eventType.id}-event-panel`} className='my-2'>
                        <CardBody className='p-3'>
                            <Button block color="secondary" size="lg" onClick={this.toggle} className='mb-2 text-left'>
                                <FontAwesomeIcon icon={this.state.isMainCardOpen ? "caret-down" : "caret-right"} pull="left" size="lg" />
                                {eventType.title}
                            </Button>
                            <Collapse isOpen={this.state.isMainCardOpen}>
                                {this.renderEvents()}
                            </Collapse>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

EventPanel.propTypes = {
    eventType: PropTypes.object.isRequired,    
    events: PropTypes.arrayOf(eventPropTypes).isRequired,
};