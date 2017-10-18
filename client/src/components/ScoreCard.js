import React, {Component} from 'react'

class ScoreCard extends Component {
  constructor(){
    super()

    this.state = {
      counter: 0,
    }
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter += 1
    })
  }

  callApi = () => {
    console.log("a")
    fetch('/api/games')
      .then(response => {
        console.log("b")
        return response.json()})
      .then(games => console.log("c", games))
      console.log("d")
  }

  render(){
    return(
      <div><h3>{this.props.entry.initials} &#9733; {this.props.entry.score}</h3><button onClick={this.clickHandler}>Likes:{this.state.counter}</button><button onClick={this.callApi}>Call Api</button></div>
    )
  }
}

export default ScoreCard