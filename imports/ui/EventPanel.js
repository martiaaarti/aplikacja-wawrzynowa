import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';


export default class EventPanel extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Card>
                                <CardBody>
                                    <Button block color="#333" onClick={this.toggle} style={{ marginBottom: '0.5rem' }}>Wydarzenie</Button>
                                    <Collapse isOpen={this.state.collapse}>
                                        <Card>
                                            <CardBody className="event-item">Poranne siódemki</CardBody>
                                        </Card>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

