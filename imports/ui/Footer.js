import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-footer">
                <Container>
                    <Row>
                        <Col sm="12" md="12" lg="12">
                            <p className="align-self-center">&copy; 2018. Duszpasterstwo Akademickie Wawrzyny</p>
                        </Col>
                    </Row>
                </Container>               
            </div>
        )
    }
}
