import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CardBody, Card } from 'reactstrap';

export default class Events extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const { id } = this.props

        return (
            <Card className="pt-0">
                <CardBody id={`${id}-event-view`} className="py-2"></CardBody>
            </Card>
        )
    }
}

Events.propTypes = {
    id: PropTypes.string.isRequired
};
