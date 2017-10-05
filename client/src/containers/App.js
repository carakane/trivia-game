import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Game from './Game'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

class App extends Component {
  constructor(){
    super()

    this.setState = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
        </Router>
        <ConnectedGame />
        <Footer />
      </div>
    );
  }
}

export default App;
