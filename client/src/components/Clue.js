import { Button, Panel } from 'react-bootstrap';
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
    return(
      <Panel header={titleize(this.props.question.category.title) + ' ' + String.fromCharCode(0x2606) +' $' + (this.props.question.value || 3000)} bsStyle="info">
        <div className="clue">Question: {this.props.question.question}</div>
        <div className="answerDIV">{this.state.question.isAnswered === false ? <Button onClick={() => this.onAnswer(this.props.question.id)}>Ready to Answer?</Button>
          :<div> 
          <div className="answer">Answer: {titleize(this.props.question.answer)}</div>
          <Button bsStyle="info" disabled={this.state.question.disabled} id={this.props.question.id + '-correct'} onClick={() => this.onCorrect(this.props.question.id)}>I was right!</Button>
          <Button bsStyle="success" disabled={this.state.question.disabled} id={this.props.question.id + '-incorrect'} onClick={() => this.onIncorrect(this.props.question.id)}>I was wrong!</Button>
          </div>}
      </div>
      </Panel>
    )
  }  
}
  
  export default Clue
  