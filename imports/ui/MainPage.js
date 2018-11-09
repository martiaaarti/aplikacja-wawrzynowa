import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


// MainPage component - represents a main content of the app
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main-content">
                <Row>
                    <Col></Col>
                </Row>
            </main>
        )
    }
}