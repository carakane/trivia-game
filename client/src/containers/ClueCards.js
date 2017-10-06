import React, { Component } from 'react';
import Clue from '../components/Clue'


class ClueCards extends Component {
  constructor() {
    super()

    this.setState = {
      question: {
        isAnswered: false
      }
    }

    this.onAnswer = this.onAnswer.bind(this)
  }
  onAnswer = (event) => {
    debugger
    this.setState({
      question: {
        isAnswered: true
      }
    })
  }

  render() {
    const clueElem = this.props.questions.map(question => <Clue question={question} onAnswer={this.onAnswer}/>)
    return (
      <div>
        {clueElem}
      </div>

    )
  }
}

export default ClueCards
