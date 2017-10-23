import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators'

class ScoreCard extends Component {
  // constructor(){
  //   super()

  //   this.state = {
  //     counter: 0,
  //   }
  // }

  clickHandler = (event) => {
    this.props.actions.likesUpdate(event)
    // this.setState({
    //   counter: this.state.counter += 1
    // })
  }

  // callApi = () => {
  //   console.log("a")
  //   fetch('/api/games')
  //     .then(response => {
  //       console.log("b")
  //       return response.json()})
  //     .then(games => console.log("c", games))
  //     console.log("d")
  // }

  render(){
    return(
      <div key={this.props.entry.id}><h3>{this.props.entry.initials} &#9733; {this.props.entry.score}</h3><button onClick={() => this.clickHandler(this.props.entry.id)}>Likes: {this.props.entry.likes}</button></div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     state
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
};

export const ConnectedScoreCard = connect(null, mapDispatchToProps)(ScoreCard);
