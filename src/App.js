import React, { Component } from 'react';
import HomePage from './screens/HomePage/'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from './screens/AboutPage/';
import ProgrammerPage from './screens/ProgrammerPage';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/programmer" component={ProgrammerPage} />
        </div>
      </Router>
    );
  }
}

export default App;
