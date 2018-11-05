import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';


export default class EventPanel extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isMainCardOpen: false };
    }

    toggle() {
        this.setState({ isMainCardOpen: !this.state.isMainCardOpen });
    }

    render() {

        const { eventType, id } = this.props

        return (
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Card id={`${id}-event-panel`} className='my-2'>
                        <CardBody className='p-3'>
                            <Button block color="secondary" size="lg" onClick={this.toggle} className='mb-2 text-left'>
                                <FontAwesomeIcon icon={this.state.isMainCardOpen ? "caret-down" : "caret-right"} pull="left" size="lg" />
                                {eventType}
                            </Button>
                            <Collapse isOpen={this.state.isMainCardOpen}>
                                <Card className='pt-0'>
                                    <CardBody className='py-2'>Poranne siódemki</CardBody>
                                </Card>
                            </Collapse>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

EventPanel.propTypes = {
    id: PropTypes.string.isRequired,
    eventType: PropTypes.string
};

