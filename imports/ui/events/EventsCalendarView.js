import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Row, Col } from 'reactstrap';

export default class EventsCalendarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
          }
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <Row>
                <Col sm="12" md={{ size: 6, offset: 4 }}>
                    <Calendar 
                    className="text-secondary"

                        onChange={this.onChange}
                        value={this.state.date} 
                    />
                </Col>
            </Row>             
        )
    }
}