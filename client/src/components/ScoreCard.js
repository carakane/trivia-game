import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'

class ScoreCard extends Component {
  clickHandler = (event) => {
    this.props.actions.likesUpdate(event)
  }

  render(){
    return(
      <div key={this.props.entry.id}><h3>{this.props.entry.initials} &#9733; {this.props.entry.score}</h3><button onClick={() => this.clickHandler(this.props.entry.id)}>Likes: {this.props.entry.likes}</button></div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};

export const ConnectedScoreCard = connect(null, mapDispatchToProps)(ScoreCard);
