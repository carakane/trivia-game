import React, { Component } from 'react';
import Clue from '../components/Clue'


class ClueCards extends Component {
  render() {
    const clueElem = this.props.questions.map(question => <Clue question={question}/>)
    return (
      <div>
        {clueElem}
      </div>

    )
  }
}

export default ClueCards