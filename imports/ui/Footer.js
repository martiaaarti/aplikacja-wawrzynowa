import React, { Component } from 'react';



export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-footer">
                <div className="ministry-name">
                    <h2>Duszpasterstwo Akademickie Wawrzyny</h2>
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/DAWawrzyny/" title="facebook"></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/DAWawrzyny" title="youtube"></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}