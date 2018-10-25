import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


export default class Switch extends Component {
    constructor(props) {
        super(props);

    }




    render() {
        return (
            <ButtonGroup>
                <Button>Lista</Button>
                <Button>Kalendarz</Button>
            </ButtonGroup>
        )
    }
}