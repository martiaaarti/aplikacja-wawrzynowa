import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


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
            <div>
                <Card id="main-card">
                    <CardBody className="card-body-style">
                        <Button className="button-content" block color="#333" onClick={this.toggle} style={{ marginBottom: '0.5rem' }}>
                            <FontAwesomeIcon icon="caret-right"/>
                            Wydarzenie
                        </Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBody className="event-item">Poranne siódemki</CardBody>
                            </Card>
                        </Collapse>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

