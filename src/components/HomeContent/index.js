import React, { Component } from 'react'
import HomeHeader from '../HomeHeader'
import HomeBody from '../HomeBody'
import Footer from '../Footer'

export default class HomeContent extends Component {
    render() {
        return (
            <div>
                <HomeHeader theme={this.props.theme} />
                <HomeBody changeTheme={this.props.changeTheme} />
                <Footer theme={this.props.theme}/>
            </div>
        )
    }
}
