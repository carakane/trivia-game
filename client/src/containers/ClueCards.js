import React, { Component } from 'react';
import Clue from '../components/Clue'

const ClueCards = (props) => { 
  const clueElem = props.questions.map(question => <Clue question={question} scoreHandler={props.scoreHandler} />)
  
  return(
    <div>
      {clueElem}
    </div>
  )
}

export default ClueCards
