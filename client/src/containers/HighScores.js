import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'

class HighScores extends Component {

  componentDidMount() {
    this.props.actions.highScores();
  }
  render(){

    return (
      <div>high scores</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.games.loading,
    score: state.games.score,
    initials: state.games.initials,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};

export const ConnectedScores = connect(mapStateToProps, mapDispatchToProps)(HighScores);
