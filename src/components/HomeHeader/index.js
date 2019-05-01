import React, { Component } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import './style.css'
import { Link } from 'react-router-dom'


export default class HomeHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="header-icons">
                    <a href="https://www.facebook.com/moore.dhart" className="header-icon-container facebook">
                        <FaFacebookF className="header-icon" />
                        <div className="icon-detail">MOORE D-HART</div>
                    </a>
                    <a href="https://instagram.com/mooredh" className="header-icon-container instagram">
                        <FaInstagram className="header-icon" />
                        <div className="icon-detail">@MOOREDH</div>
                    </a>
                    <a href="https://twitter.com/mooredh_" className="header-icon-container twitter">
                        <FaTwitter className="header-icon" />
                        <div className="icon-detail">@MOORE_DH</div>
                    </a>
                    <a href="https://github.com/mooredh" className="header-icon-container github">
                        <FaGithub className="header-icon" />
                        <div className="icon-detail">MOOREDH</div>
                    </a>
                </div>
                <div className="header-title">MOORE DAGOGO-HART</div>
                <Link to='/about' className="about-button-container">
                    <div className="about-button" style={{ backgroundColor: this.props.theme }}>ABOUT</div>
                </Link>
            </div>
        )
    }
}
