import '../styles/highscores.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'
import {ConnectedScoreCard} from '../components/ScoreCard'

class HighScores extends Component {
  // constructor(){
  //   super()

  //   this.state = {
  //     initials: '',
  //     score: '',
  //     counter: 0
  //   }
  // }

  componentDidMount() {
    this.props.actions.highScores();
  }

  render(){
    const sortedScoresByLikes = this.props.highscores.sort(function (a, b) {
      return b.likes - a.likes;
    });

    return (
      <div>
        <h1 id="highscores">HIGH SCORES</h1>
        <div className="col-3">
          {sortedScoresByLikes.map(entry => <ConnectedScoreCard entry={entry} key={entry.id} />)}
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.games.loading,
    highscores: state.games.highscores
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};

export const ConnectedScores = connect(mapStateToProps, mapDispatchToProps)(HighScores);
