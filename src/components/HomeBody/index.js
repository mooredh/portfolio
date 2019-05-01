import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default class HomeBody extends Component {
    render() {
        return (
            <div className="home-body">
                <div className="question">WHO DO YOU WANNA MEET?</div>
                <div className="home-options-container">
                    <Link
                        to="/producer"
                        className="home-option artist"
                        onMouseOver={() => this.props.changeTheme('ARTIST')}
                        onMouseOut={this.props.changeTheme}
                    >
                        artist/producer
                    </Link>
                    <Link
                        to="/programmer"
                        className="home-option programmer"
                        onMouseOver={() => this.props.changeTheme('PROGRAMMER')}
                        onMouseOut={this.props.changeTheme}
                    >
                        programmer
                    </Link>
                </div>
            </div>
        )
    }
}
