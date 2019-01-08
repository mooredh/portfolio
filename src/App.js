import React, { Component } from 'react';
import HomePage from './screens/HomePage/'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from './screens/AboutPage/';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
