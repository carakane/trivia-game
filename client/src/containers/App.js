import '../styles/app.css';
import { Grid, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ConnectedGame} from './Game'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {ConnectedScores} from './HighScores'
import Instructions from '../components/Instructions'

class App extends Component {
  render() {
    return (
      <Grid>
      <Col xs={6} md={4} />
      <div className="App">
        <h1 id="play">Let's Play!!!</h1>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/game" component={ConnectedGame} />
            <Route exact path="/highscores" component={ConnectedScores} />
            <Route exact path="/Instructions" component={Instructions} />
          </div>
        </Router>
        <Footer />
      </div>
    </Grid>
    );
  }
}

export default App;
