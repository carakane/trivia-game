import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'
import ClueCards from './ClueCards'
import Score from './Score'
import HighScores from './HighScores'
import swal from 'sweetalert'


class Game extends Component {
  constructor() {
    super()

    this.state = {
      visible: '',
      score: 0,
      clueCount: 0
    }
    this.scoreHandler = this.scoreHandler.bind(this)
    this.gameOverCheck = this.gameOverCheck.bind(this)

  }

  componentDidMount() {
    this.props.actions.fetchGame();
  }

  scoreHandler(event){
    this.setState({
      score: this.state.score + event,
      clueCount: this.state.clueCount + 1
    });
    this.gameOverCheck()
  }
 
  gameOverCheck = () => {
    if (this.state.clueCount < 1) {
      swal("Game Over", "Do you want to see your score?",{
        buttons: {
          score: "Yes!",
          nope: "No!",
          play: "Play Again",
        },
      })
      .then((value) => {
        switch(value) {
          case 'score':
            window.location = '/highscores';
            console.log("score")
            break;
          case 'nope':
            window.location = '/';
            console.log("nope")
            break;
          case 'play':
            window.location = '/game';
            break;
          default:
            console.log("default")
          
        }
      }
    )
    }
  }

  render() {
    return (
      <div className="Game">
        <h1>Let's Play!!!</h1>
        {this.state.clueCount}
        <Score score={this.state.score}/>
        <ClueCards scoreHandler={this.scoreHandler} questions={this.props.questions} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.games.loading,
    score: state.games.score,
    clueCount: state.games.clueCount,
    initials: state.games.initials,
    questions: state.games.questions
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};

export const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);
