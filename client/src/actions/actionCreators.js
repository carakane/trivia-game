import "isomorphic-fetch"

export function fetchGame(){
  return(dispatch) => {
    dispatch({type: 'LOADING_GAME'})
    return fetch('http://jservice.io/api/random?count=10')
      .then(response => response.json())
      .then(payload => dispatch({type: 'START_GAME', payload}))
  }
}