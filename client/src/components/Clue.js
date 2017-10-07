import React, {Component} from 'react';
var titleize = require('titleize');

class Clue extends Component {
  constructor() {
    super()

    this.state = {
      question: {
        isAnswered: false,
        isCorrect: '',
        disabled: false
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
  }

  onCorrect(event) {
    this.setState({
       question: {
        isCorrect: true,
        disabled: true
      }
    });
    this.props.scoreHandler(this.props.question.value)
    // document.getElementById(`${event}-correct`).disabled = true
    // document.getElementById(`${event}-incorrect`).disabled = true
  }

  onIncorrect(event) {
    this.setState({
      score: this.state.score - this.props.question.value,
      question: {
        isCorrect: false,
        disabled: true        
      }
    });
    this.props.scoreHandler(-this.props.question.value)
  }


  
  render(){
    // const disabled = this.state.question.disabled ? 'disabled' : ''

    return(
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <div className="value">${this.props.question.value || 3000}</div>
        <div className="category">Category: {titleize(this.props.question.category.title)}</div>
        <div className="clue">Question: {this.props.question.question}</div>
        <div className="answerDIV">{this.state.question.isAnswered === false ? <button onClick={() => this.onAnswer(this.props.question.id)}>Ready to Answer?</button>
          :<div> 
          <div className="answer">Answer: {titleize(this.props.question.answer)}</div>
          <button disabled={this.state.question.disabled} id={this.props.question.id + '-correct'} onClick={() => this.onCorrect(this.props.question.id)}>I was right!</button>
          <button disabled={this.state.question.disabled} id={this.props.question.id + '-incorrect'} onClick={() => this.onIncorrect(this.props.question.id)}>I was wrong!</button>
          </div>}
        </div>
      </div>
    )
  }
    
  }
  
  
  export default Clue
  