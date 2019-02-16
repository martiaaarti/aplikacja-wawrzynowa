import React from 'react';

import { CardBody, Card } from 'reactstrap';
import {eventPropTypes} from './types/eventPropTypes.js';

const Event = ({eventsList}) => {
    return (

        <div className="py-1">
            <Card className="pt-0">
                <CardBody className="py-2">{eventsList.name} | {eventsList.startDateTime}</CardBody>
            </Card>
        </div>

    )
};

Event.propTypes = {
    eventsList: eventPropTypes.isRequired
    };

export default Event;


