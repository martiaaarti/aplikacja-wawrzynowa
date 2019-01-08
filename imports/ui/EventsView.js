import React, { Component } from 'react';

import EventsListView from './EventsListView.js';
import EventsCalendarView from './EventsCalendarView.js';
import SwitchButton from './SwitchButton.js';




export default class EventsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalendarSelected: false
        };
        this.onNavigate = this.onNavigate.bind(this);
    }

    onNavigate(isCalendarSelected) {
        this.setState({ isCalendarSelected });
    }


    render() {
        return (
            <div>
                {/* <div className="d-flex justify-content-end">
                            <ButtonGroup className='my-4'>
                                <Button color="secondary" onClick={() => this.onNavigate(false)} active={this.state.isCalendarSelected === false}>Lista</Button>
                                <Button color="secondary" onClick={() => this.onNavigate(true)} active={this.state.isCalendarSelected === true}>Kalendarz</Button>
                            </ButtonGroup>
                        </div>                          */}

                <SwitchButton onNavigate={this.onNavigate} isCalendarSelected={this.state.isCalendarSelected} />

                {this.state.isCalendarSelected === false && (
                    <EventsListView />
                )}
                {this.state.isCalendarSelected === true && (
                    <EventsCalendarView />
                )}

            </div>

        )
    }
}



