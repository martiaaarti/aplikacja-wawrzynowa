import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


export default class SwitchButton extends Component {
    constructor(props) {
        super(props);       
    }

    render() {
        return (
            <div className="d-flex justify-content-end">
                <ButtonGroup className='my-4'>
                    <Button color="secondary" onClick={() => this.props.onNavigate(false)} active={this.state.isCalendarSelected === false}>Lista</Button>
                    <Button color="secondary" onClick={() => this.props.onNavigate(true)} active={this.state.isCalendarSelected === true}>Kalendarz</Button>
                </ButtonGroup>
            </div>             
        )
    }
}


