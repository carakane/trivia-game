import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Game from './Game'
import NavBar from '../components/NavBar'

class App extends Component {
  constructor(){
    super()

    this.setState = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Game />
      </div>
    );
  }
}

export default App;
