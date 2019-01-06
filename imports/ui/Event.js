import React from 'react';

import { CardBody, Card } from 'reactstrap';
import {eventsList} from './types/eventPropTypes.js';

const Event = ({eventsList}) => {
    return (

        <div className="py-1">
            <Card className="pt-0">
                <CardBody className="py-2">{eventsList.name}</CardBody>
            </Card>
        </div>

    )
};

Event.propTypes = {
    eventsList: eventsList.isRequired
    };

export default Event;


