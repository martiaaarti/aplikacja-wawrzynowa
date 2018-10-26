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
            <Container className="main-content">
                <Row>
                    <Col xs="2"></Col>
                    <Col md="8"></Col>
                    <Col xs="2"><Switch /></Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col md="8">
                        <EventPanel />
                    </Col>
                    <Col xs="2"></Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col md="8">
                        <EventPanel />
                    </Col>
                    <Col xs="2"></Col>
                </Row>
            </Container>
        )
    }
}