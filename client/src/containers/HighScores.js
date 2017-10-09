import '../styles/highscores.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'

class HighScores extends Component {
  constructor(){
    super()

    this.state = {
      initials: '',
      score: ''
    }
  }

  componentDidMount() {
    this.props.actions.highScores();
  }
  render(){

    return (
      <div>
        <h1 id="highscores">HIGH SCORES</h1>
        <div className="col-3">
          {this.props.highscores.map(entry => <h3>{entry.initials} &#9733; {entry.score}</h3>)}
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
