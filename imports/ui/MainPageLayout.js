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
                    <Col></Col>
                    <Col className="col-7"></Col>
                    <Col><Switch /></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="col-7">
                        <EventPanel id='single-events' eventType={'Wydarzenia pojedyncze'} />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="col-7">
                        <EventPanel id='recurring-events' eventType={'Wydarzenia cykliczne'} />
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}
