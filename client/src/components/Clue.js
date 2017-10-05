import React from 'react';

const Clue = ({questions}) => {

  return(
    <div>
      {questions.map(question =>
      <div className="value">{question.value}
      <div className="category">{question.category}</div>
      <div className="clue">{question.clue}</div>
      <div className="answer">{question.answer}</div>
      </div>)}

    </div>
  )
}

export default Clue
