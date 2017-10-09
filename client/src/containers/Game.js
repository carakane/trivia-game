import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'
import ClueCards from './ClueCards'
import Score from '../components/Score'
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
  

  componentDidMount = () => {
    this.props.actions.fetchGame();
  }

  scoreHandler = (event) => {
    const amount = event ? event : 3000;
    this.setState({
      score: this.state.score + amount,
      clueCount: this.state.clueCount + 1
    }, () => this.gameOverCheck())
  }
 
  gameOverCheck = () => {
    const final = this.state.score
    if (this.state.clueCount > 9) {
      swal({
        title: "Game Over",
        text: `Your final score is $${final}!`,
        content: {
          element: "input",
          attributes: {
            placeholder: "Enter Your Initials",
            type: "text",
          },
        },
     })
      .then((value) => {
        this.props.actions.gameOver(`${value}`, final)
      })
  }
}



  render() {
    return (
      <div className="Game">
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
