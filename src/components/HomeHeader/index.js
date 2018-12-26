import React, { Component } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import './style.css'

export default class HomeHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="header-icons">
                    <div className="header-icon-container facebook">
                        <FaFacebookF className="header-icon" />
                        <div className="icon-detail">MOORE D-HART</div>
                    </div>
                    <div className="header-icon-container instagram">
                        <FaInstagram className="header-icon" />
                        <div className="icon-detail">@MOOREDH</div>
                    </div>
                    <div className="header-icon-container twitter">
                        <FaTwitter className="header-icon" />
                        <div className="icon-detail">@MOORE_DH</div>
                    </div>
                </div>
                <div className="header-title">MOORE DAGOGO-HART</div>
                <div className="about-button-container">
                    <div className="about-button" style={{ backgroundColor: this.props.theme }}>ABOUT</div>
                </div>
            </div>
        )
    }
}
