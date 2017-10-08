import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ConnectedGame} from './Game'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HighScores from './HighScores'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/game" component={ConnectedGame} />
            <Route exact path="/highscores" component={HighScores} />
          </div>
        </Router>
          {/* <ConnectedGame /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
