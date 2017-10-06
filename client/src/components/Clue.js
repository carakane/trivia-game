import React, {Component} from 'react';
var titleize = require('titleize');

class Clue extends Component {
  constructor() {
    super()

    this.state = {
      question: {
        isAnswered: false
      }
    }

    this.onAnswer = this.onAnswer.bind(this)
  }
  
  onAnswer(event) {
    this.setState({
      question: {
        isAnswered: true
      }
    });

    // shouldComponentUpdate(nextProps, nextState){
    //   return true
    // }
  }

  render(){

    return(
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <div className="value">${this.props.question.value || 3000}</div>
        <div className="category">Category: {titleize(this.props.question.category.title)}</div>
        <div className="clue">Question: {this.props.question.question}</div>
        <div className="answerDIV">{this.state.question.isAnswered === false ? <button onClick={() => this.onAnswer(this.props.question.id)}>Ready to Answer?</button>
          : <div className="answer">Answer: {titleize(this.props.question.answer)}</div>}
        </div>
      </div>
    )
  }
    
  }
  
  
  export default Clue
  