import React, { Component } from 'react';



// MainPage component - represents a main content of the app
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainFooter">
                <div className="ministry-name">
                    <h2>Duszpasterstwo Akademickie Wawrzyny</h2>
                </div>
                {/* Ikony Facebook i Youtube do odpowiednich stron Wawrzynowych: nie mogę podłączyć ikon do linków */}
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