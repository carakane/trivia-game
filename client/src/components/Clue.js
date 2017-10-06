import React from 'react';
var titleize = require('titleize');

const Clue = ({questions}) => {
  debugger;

  return(
    <div>
      {questions.map(question =>
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <div className="value">{question.value}</div>
        <div className="category">{titleize(question.category.title)}</div>
        <div className="clue">{question.question}</div>
        <div className="answer">{question.answer}</div>
      </div>)}
    </div>
  )
}

export default Clue
