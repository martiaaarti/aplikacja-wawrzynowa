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
            </div>
        )
    }
}

export default EventDescription;