const initialState = {
  loading: '',
  ending: '',
  updating: '',
  score: 0,
  clueCount: 0,
  initials: '',
  questions: [],
  highscores: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING_GAME':
        return Object.assign({}, state, { loading: true })
      case 'START_GAME':
       return {...state, loading: false, questions: action.payload};
      case 'ENDING_GAME':
        return Object.assign({}, state, { ending: true })
      case 'LOADING_SCORES':
        return Object.assign({}, state, { loading: true })        
      case 'SHOW_SCORES':
        return { ...state, loading: false, highscores: action.payload };
      case 'UPDATE_SCORE':
        return{...state, score: state.score += action.amount, clueCount: state.clueCount += 1}
      case 'UPDATING_LIKES':
        return Object.assign({}, state, { updating: true })  
      case 'SHOW_LIKES':
        const index = state.highscores.findIndex(score => score.id === action.payload.id);
        const score = state.highscores[index];

        return {...state, updating: false, highscores:  [
          ...state.highscores.slice(0, index),
          Object.assign({}, score, { likes: action.payload.likes }),
          ...state.highscores.slice(index + 1)
        ]};
      default:
        return state;
    }
  };