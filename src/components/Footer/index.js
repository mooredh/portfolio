import React, { Component } from 'react'
import './style.css'
import { FaCopyright, FaEnvelope } from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
            <div className="app-footer">
                <div className="copyright">Moore Dagogo Hart &nbsp;<FaCopyright className="icon" /> &nbsp;2019</div>
                <div className="envelope" style={{ backgroundColor: this.props.theme }}><FaEnvelope className="icon" /></div>
            </div>
        )
    }
}
