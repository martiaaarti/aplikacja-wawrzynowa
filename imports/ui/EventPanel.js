import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export default class EventPanel extends Component {
    constructor(props) {
        super(props);
        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { isMainCardCollapsed: false };
    }

    onEnter() {
        this.setState({ status: <FontAwesomeIcon icon="caret-down" pull="left" size="lg" /> });
    }

    onExit() {
        this.setState({ status: <FontAwesomeIcon icon="caret-right" pull="left" size="lg" /> });
    }


    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Card id="main-card">
                <CardBody>
                    <Button block color="secondary" size="lg" onClick={this.toggle} style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
                        <span>
                            <FontAwesomeIcon icon={this.state.isMainCardCollapsed ? "caret-right" : "caret-down"} pull="left" size="lg" style={{ paddingRight: '5px' }} />
                        </span>
                        Wydarzenie
                        </Button>
                    <Collapse isOpen={this.state.collapse}
                        onEnter={this.onEnter}
                        onExit={this.onExit}>
                        <Card style={{ paddingTop: '0px'}}>
                            <CardBody style={{ paddingBottom: '10px', paddingTop: '10px' }}>Poranne siódemki</CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
            </Card>
        )
    }
}

