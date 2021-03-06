import '../styles/highscores.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'
import ScoreCard from '../components/ScoreCard'

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
    return (
      <div>
        <h1 id="highscores">HIGH SCORES</h1>
        <div className="col-3">
          {this.props.highscores.map(entry => <ScoreCard entry={entry} key={entry.id}/>)}
          
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
