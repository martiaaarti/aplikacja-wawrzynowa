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

        const { eventType } = this.props

        return (
            <Card id="event-panel-main-card">
                <CardBody>
                    <Button block color="secondary" size="lg" onClick={this.toggle} style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
                        <span>
                            <FontAwesomeIcon icon={this.state.collapse ? "caret-right" : "caret-down"} pull="left" size="lg" style={{ paddingRight: '5px' }} />
                        </span>
                    {eventType}
                    </Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card style={{ paddingTop: '0px'}}>
                            <CardBody style={{ paddingBottom: '10px', paddingTop: '10px' }}>Poranne siódemki</CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
            </Card>
        )
    }
}

