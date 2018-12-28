import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EventDescription extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                <FontAwesomeIcon icon="arrow-left" size="2x" color="rgba(0,0,0,.5)" className="mt-3" />
                </Link>
            </div>
        )
    }
}

export default EventDescription