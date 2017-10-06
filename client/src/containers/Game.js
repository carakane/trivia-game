import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'
import Clue from '../components/Clue'


class Game extends Component {
    componentDidMount() {
      this.props.actions.fetchGame();
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
    return {loading: state.games.loading,
      score: state.games.score,
      clueCount: state.games.clueCount,
      initials: state.games.initials,
      questions: state.games.questions}
  }

  const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
  };
  
  export const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);
  