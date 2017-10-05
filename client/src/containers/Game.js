import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchGame from './actions/actionCreators'
import Clue from '../components/Clue'


class Game extends Component {
    constructor(){
      super()
  
      this.setState = {
  
      }
    }

    componentDidMount() {
      this.props.fetchGame();
    }
    
    render() {
      return (
        <div className="Game">
          Let's Play Jeopardy!!!
          <Clue props={this.props}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {score: state.score,
      clueCount: state.clueCount,
      initials: state.initials}
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
      fetchGame: fetchGame
    }, dispatch);
  };
  
  export const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);
  