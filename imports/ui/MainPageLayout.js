import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import EventPanel from './EventPanel.js';
import Switch from './SwitchButton.js'


// MainPage component - represents a main content of the app
export default class MainPageLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md="2" sm="0"></Col>
                    <Col md="8" sm="12"></Col>
                    <Col md="2" sm="0"><Switch/></Col>
                </Row>
                <Row>
                    <Col md="2" sm="0"></Col>
                    <Col md="8" sm="12">
                        <EventPanel id='single-events' eventType={'Wydarzenia pojedyncze'} />
                    </Col>
                    <Col md="2" sm="0"></Col>
                </Row>
                <Row>
                    <Col md="2" sm="0"></Col>
                    <Col md="8" sm="12">
                        <EventPanel id='recurring-events' eventType={'Wydarzenia cykliczne'} />
                    </Col>
                    <Col md="2" sm="0"></Col>
                </Row>
            </div>
        )
    }
}
