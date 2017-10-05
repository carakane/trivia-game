import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchGame} from '../actions/actionCreators'
import Clue from '../components/Clue'


class Game extends Component {
    constructor(props){
      super(props)
  
      this.setState = {
        score: '',
        clueCount: '',
        initials: '',
        questions: []
      }
    }
    

    componentDidMount() {
      this.props.fetchGame();
    }
    
    render() {
      return (
        <div className="Game">
          Let's Play Jeopardy!!!
          <Clue questions={this.props.questions}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {score: state.score,
      clueCount: state.clueCount,
      initials: state.initials,
      questions: state.questions}
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
      fetchGame: fetchGame
    }, dispatch);
  };
  
  export const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);
  