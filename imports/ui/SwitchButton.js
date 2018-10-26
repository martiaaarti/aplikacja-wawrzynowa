import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


export default class Switch extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ButtonGroup className="switch-button">
                <Button color="secondary">Lista</Button>
                <Button color="secondary">Kalendarz</Button>
            </ButtonGroup>
        )
    }
}