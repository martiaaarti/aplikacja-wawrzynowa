import React, { Component } from 'react';

import { CardBody, Card } from 'reactstrap';

export default class Event extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="py-1">
            <Card className="pt-0">
                <CardBody className="py-2">{this.props.event.text}</CardBody>
            </Card>
            </div>
        )
    }
}


