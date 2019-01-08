import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';


export default class SwitchButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex justify-content-end">
                <ButtonGroup className='my-4'>
                    <Button color="secondary" onClick={() => this.props.onNavigate(false)} active={this.props.isCalendarSelected === false}>Lista</Button>
                    <Button color="secondary" onClick={() => this.props.onNavigate(true)} active={this.props.isCalendarSelected === true}>Kalendarz</Button>
                </ButtonGroup>
            </div>
        )
    }
}

SwitchButton.propTypes = {
    onNavigate: PropTypes.func.isRequired
}
