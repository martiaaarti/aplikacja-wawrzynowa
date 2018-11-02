import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


export default class Switch extends Component {
    constructor(props) {
        super(props);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.state = { isKalendarSelected: false };
       
    }

    onRadioBtnClick(isKalendarSelected) {
        this.setState({ isKalendarSelected });
      }

    render() {
        return (
            <ButtonGroup className='my-4'>
                <Button color="secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.isKalendarSelected === 1}>Lista</Button>
                <Button color="secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.isKalendarSelected === 2}>Kalendarz</Button>
            </ButtonGroup>
        )
    }
}


