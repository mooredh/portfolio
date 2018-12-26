import React, { Component } from 'react'
import HomeHeader from '../HomeHeader/'
import HomeBody from '../HomeBody/'
import HomeFooter from '../HomeFooter/'

export default class MainContent extends Component {
    render() {
        return (
            <div>
                <HomeHeader theme={this.props.theme} />
                <HomeBody changeTheme={this.props.changeTheme} />
                <HomeFooter theme={this.props.theme}/>
            </div>
        )
    }
}
