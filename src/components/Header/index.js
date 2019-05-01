import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="name">{this.props.name}</div>
                <div className="nav">
                    <Link className="home" style={{ backgroundColor: this.props.theme, }} to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/producer">PRODUCER</Link>
                </div>
            </div>
        )
    }
}
