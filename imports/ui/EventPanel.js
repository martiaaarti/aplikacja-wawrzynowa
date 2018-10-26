import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export default class EventPanel extends Component {
    constructor(props) {
        super(props);
        this.onEntered = this.onEntered.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, status: <FontAwesomeIcon icon="caret-right" pull="left" size="lg"/> };
    }

    onEntered() {
        this.setState({ status: <FontAwesomeIcon icon="caret-down" pull="left" size="lg"/> });
    }

    onExited() {
        this.setState({ status: <FontAwesomeIcon icon="caret-right" pull="left" size="lg"/> });
    }


    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <Card id="main-card">
                    <CardBody>
                        <Button block color="secondary" size="lg" onClick={this.toggle} style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
                            <span id="icon-span">{this.state.status}</span>
                            Wydarzenie
                        </Button>
                        <Collapse isOpen={this.state.collapse}
                            onEntered={this.onEntered}
                            onExited={this.onExited}>
                            <Card className="event-item">
                                <CardBody style={{ paddingBottom: '10px', paddingTop: '10px' }}>Poranne siódemki</CardBody>
                            </Card>
                        </Collapse>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

