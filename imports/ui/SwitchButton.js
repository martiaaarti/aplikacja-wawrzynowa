import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


export default class Switch extends Component {
    constructor(props) {
        super(props);       
    }



    render() {
        return (
            <ButtonGroup className='my-4'>
                <Button color="secondary" onClick={this.props.onNavigate(false)} active={this.state.isCalendarSelected === false}>Lista</Button>
                <Button color="secondary" onClick={this.props.onNavigate(true)} active={this.state.isCalendarSelected === true}>Kalendarz</Button>
            </ButtonGroup>
        )
    }
}


