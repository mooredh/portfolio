import React, { Component } from 'react';
import Background from '../../components/Background/'
import MainContent from '../../components/MainContent/'
import pictureOne from '../../assets/images/one.jpg'
import pictureTwo from '../../assets/images/two.jpg'
import './style.css'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: '',
            currentPicture: pictureOne,
            bgClass: ''
        }
    }

    changeTheme = (type) => {
        switch (type) {
            case 'PROGRAMMER':
                this.setState({
                    theme: '#FE3131',
                    currentPicture: pictureOne,
                    bgClass: 'bg-move'
                })
                break;
            case 'ARTIST':
                this.setState({
                    theme: '#04AFF8',
                    currentPicture: pictureTwo,
                    bgClass: 'bg-move'
                })
                break;
            default:
                this.setState({ theme: '', bgClass: '' })
                break;
        }
    }


    render() {
        return (
            <div className="App">
                <img src={this.state.currentPicture} alt="background" className="bg-image"/>
                <Background className={`left ${this.state.bgClass}`} />
                <Background className={`right ${this.state.bgClass}`} />
                <MainContent theme={this.state.theme} changeTheme={this.changeTheme} />
            </div>
        );
    }
}

export default HomePage;
