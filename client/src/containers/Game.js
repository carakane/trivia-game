import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'
import ClueCards from './ClueCards'
import Score from './Score'


class Game extends Component {
  constructor() {
    super()

    this.state = {
      score: 0
    }
    this.scoreHandler = this.scoreHandler.bind(this)

  }

  componentDidMount() {
    this.props.actions.fetchGame();
  }

  scoreHandler(event){
    debugger
    this.setState({
      score: this.props.score + event
    })
  }

  render() {
    return (
      <div className="Game">
        <h1>Let's Play!!!</h1>
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
    initials: state.games.initials,
    questions: state.games.questions
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};

export const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);
