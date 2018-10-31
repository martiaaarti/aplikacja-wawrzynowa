import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


const Switch = props => {
    return (
        <ButtonGroup style={{ marginTop: '15px', marginBottom: '12px' }}>
            <Button color="secondary">Lista</Button>
            <Button color="secondary">Kalendarz</Button>
        </ButtonGroup>
    );
};
