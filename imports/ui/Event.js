import React, { Component } from 'react';

import { CardBody, Card } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Event extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="py-1">
                <Card className="pt-0">
                    <CardBody className="py-2">{this.props.eventsList.text}</CardBody>
                </Card>
            </div>
        )
    }
}

Event.propTypes = {
    eventsList: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    })
};
