import React from 'react';
var titleize = require('titleize');

const Clue = ({questions}) => {
  return(
    <div>
      {questions.map(question =>
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <div className="value">${question.value || 3000}</div>
        <div className="category">Category: {titleize(question.category.title)}</div>
        <div className="clue">Question: {question.question}</div>
        <div className="answer">Answer: {titleize(question.answer)}</div>
      </div>)}
    </div>
  )
}

export default Clue
