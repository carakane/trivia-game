import React from 'react';
import Clue from '../containers/Clue'

const ClueCards = (props) => { 
  const clueElem = props.questions.map(question => <Clue question={question} scoreHandler={props.scoreHandler} />)
  
  return(
    <div>
      {clueElem}
    </div>
  )
}

export default ClueCards
