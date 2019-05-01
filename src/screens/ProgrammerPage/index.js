import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import colorMatch from '../../assets/images/color-match.png'
import elixir from '../../assets/images/elixir.png'
import resume from '../../assets/images/resume.png'
import dealin from '../../assets/images/dealin.png'
import bulc from '../../assets/images/bulc.png'
import webPhoto from '../../assets/images/web.png'
import uiPhoto from '../../assets/images/ui.png'
import mlPhoto from '../../assets/images/ml.png'
import mobilePhoto from '../../assets/images/mobile.png'
import bootstrapPhoto from '../../assets/images/bootstrap.png'
import css3Photo from '../../assets/images/css3.png'
import djangoPhoto from '../../assets/images/django.png'
import html5Photo from '../../assets/images/html5.png'
import jqueryPhoto from '../../assets/images/jquery.png'
import jsPhoto from '../../assets/images/js.png'
import laravelPhoto from '../../assets/images/laravel.png'
import phpPhoto from '../../assets/images/php.png'
import pythonPhoto from '../../assets/images/python.png'
import reactPhoto from '../../assets/images/react.png'
import tfPhoto from '../../assets/images/tf.png'

export default class ProgrammerPage extends Component {
    render() {
        return (
            <div className="programmer-container">
                <Header name="MOORE DAGOGO HART" theme="#04AFF8" />
                <div className="content">
                    <div className="row-one">
                        <div className="color-match"><img alt="Color Match Game" className="image" width="100%" height="100%" src={colorMatch} /></div>
                        <div className="info">
                            <div className="title">Hi, I'm Moore</div>
                            <div className="body">I’m a Freelance Full-Stack Web Developer living in Lagos, Nigeria. I work with web frameworks like react and express on a daily basis.</div>
                            <Link to="/about" className="btn">Learn more</Link>
                        </div>
                    </div>
                    <div className="row-two">
                        <div className="beatland">beatland</div>
                        <div className="bulc"><img alt="Color Match Game" src={bulc} /></div>
                    </div>
                    <div className="row-three">
                        <div className="services">
                            <div className="head">Services</div>
                            <div className="options">
                                <div className="web">
                                    <img src={webPhoto} alt="Web Dev" />
                                    <div>Web Developer</div>
                                </div>
                                <div className="mobile">
                                    <img src={mobilePhoto} alt="Mobile Dev" />
                                    <div>Mobile Application Developer</div>
                                </div>
                                <div className="ui-ux">
                                    <img src={uiPhoto} alt="UI/UX Designer" />
                                    <div>UI/UX Designer</div>
                                </div>
                                <div className="ml">
                                    <img src={mlPhoto} alt="ML Engineer" />
                                    <div>Machine Learning Engineering</div>
                                </div>
                            </div>
                        </div>
                        <div className="frameworks">
                            <div className="head">Languages/Frameworks</div>
                            <div className="options">
                                <div>
                                    <img src={jsPhoto} alt="JavaScript" />
                                    <img src={reactPhoto} alt="React.js" />
                                    <img src={jqueryPhoto} alt="jQuery" />
                                    <img src={html5Photo} alt="HTML5" />
                                    <img src={css3Photo} alt="CSS3" />
                                    <img src={bootstrapPhoto} alt="Bootstrap" />
                                </div>
                                <div>
                                    <img src={phpPhoto} alt="PHP" />
                                    <img src={laravelPhoto} alt="Laravel" />
                                </div>
                                <div>
                                    <img src={pythonPhoto} alt="Python" />
                                    <img src={djangoPhoto} alt="Django" />
                                    <img src={tfPhoto} alt="TensorFlow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-four">
                        <div className="elixir"><img alt="Elixir" src={elixir} /></div>
                        <div className="resume"><img src={resume} alt="Resume" /></div>
                    </div>
                    <div className="row-five">
                        <div className="dealin"><img alt="Dealin'" src={dealin} /></div>
                        <div className="travvapp">Travv<span>App</span></div>
                    </div>
                </div>
                <Footer theme="#04AFF8" />
            </div>
        )
    }
}
