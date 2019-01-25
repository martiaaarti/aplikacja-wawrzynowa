import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EventDescription extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <FontAwesomeIcon icon="arrow-left" size="2x" className="mt-3 description-back-icon" />
                </Link>
                <h1 className="description-title">There will be an event description :)</h1>
            </div>
        )
    }
}

export default EventDescription;