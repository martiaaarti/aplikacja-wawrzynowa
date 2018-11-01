import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import EventPanel from './EventPanel.js';
import Switch from './SwitchButton.js'


// MainPage component - represents a main content of the app
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="main-page-content">
                <Row>
                    <Col></Col>
                    <Col className="col-7"></Col>
                    <Col><Switch/></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="col-7">
                        <EventPanel id='single-events' eventType={'Wydarzenia Okazyjne'} />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="col-7">
                        <EventPanel id='recurring-events' eventType={'Wydarzenia Cotygodniowe'}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}