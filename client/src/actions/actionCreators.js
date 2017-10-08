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
    game: {
      initials: value,
      score: final
    }
  });
  console.log(gameInfo)
  return (dispatch) => {
    dispatch({ type: 'ENDING_GAME' })
    return fetch('/api/games', {method: "post", body: gameInfo})
      .then(response => response.json())
      .then(payload => dispatch({ type: 'END_GAME', payload }))
  }
}