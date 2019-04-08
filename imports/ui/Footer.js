import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                    <Row>
                        <Col sm="12" md="12" lg="12">
                            <p className="align-self-center">&copy; 2019. Duszpasterstwo Akademickie Wawrzyny
                                <a className="facebook-icon" href="https://www.facebook.com/DAWawrzyny/"> <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" pull="right" color="rgba(0,0,0,.5)" /></a>
                                <a className="youtube-icon" href="https://www.youtube.com/user/DAWawrzyny"> <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" pull="right" color="rgba(0,0,0,.5)"/></a>
                            </p>
                        </Col>
                    </Row>
            </div>
        )
    }
}
