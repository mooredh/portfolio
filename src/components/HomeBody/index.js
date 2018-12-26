import React, { Component } from 'react'
import './style.css'

export default class HomeBody extends Component {
    render() {
        return (
            <div className="home-body">
                <div className="question">WHO DO YOU WANNA MEET?</div>
                <div className="home-options-container">
                    <div
                        className="home-option artist"
                        onMouseOver={() => this.props.changeTheme('ARTIST')}
                        onMouseOut={this.props.changeTheme}
                    >
                        artist/producer
                    </div>
                    <div
                        className="home-option programmer"
                        onMouseOver={() => this.props.changeTheme('PROGRAMMER')}
                        onMouseOut={this.props.changeTheme}
                    >
                        programmer
                    </div>
                </div>
            </div>
        )
    }
}
