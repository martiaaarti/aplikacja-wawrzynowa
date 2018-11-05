import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import EventPanel from './EventPanel.js';
import Switch from './SwitchButton.js'


// MainPage component - represents a main content of the app
export default class MainViewEventsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="d-flex justify-content-end"><Switch /></Col>
                </Row>
                <EventPanel id="single-events" eventType='Wydarzenia pojedyncze' />
                <EventPanel id='recurring-events' eventType='Wydarzenia cykliczne' />
            </div>
        )
    }
}