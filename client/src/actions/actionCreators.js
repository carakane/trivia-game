import "isomorphic-fetch"

export function fetchGame(){
  return(dispatch) => {
    dispatch({type: 'LOADING_GAME'})
    return fetch('http://jservice.io/api/random?count=10')
      .then(response => response.json())
      .then(payload => dispatch({type: 'START_GAME', payload}))
  }
}

export function gameOver(value, final) {
  const gameInfo = JSON.stringify({
    game:{
      initials: value.toUpperCase(),
      score: final
    }
  });
  return (dispatch) => {
    dispatch({ type: 'ENDING_GAME' })
    return fetch('/api/games', {
      method: "post", body: gameInfo, headers: { "Content-Type": "application/json" }})
      .then(response => response.json())
      .then(window.location = '/highscores')
  }
}

export function highScores() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SCORES' })
    return fetch('/api/games')
      .then(response => response.json())
      .then(payload => dispatch({ type: 'SHOW_SCORES', payload }))
  }
}

export function scoreUpdate(amount) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_SCORE', amount })
  }
}