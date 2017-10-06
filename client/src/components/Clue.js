import React from 'react';
var titleize = require('titleize');

const Clue = (props) => {
   
  return(
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <div className="value">${props.question.value || 3000}</div>
        <div className="category">Category: {titleize(props.question.category.title)}</div>
        <div className="clue">Question: {props.question.question}</div>
        <div className="answerDIV">{props.question.isAnswered === undefined ? <button onClick={() => props.onAnswer(props.question.id).bind(this)}>Ready to Answer?</button>
          : <div className="answer">Answer: {titleize(props.question.answer)}</div>}
        </div>
      </div>
    )

}

export default Clue
