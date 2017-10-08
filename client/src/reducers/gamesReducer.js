const initialState = {
  loading: '',
  ending: '',
  score: 0,
  clueCount: 0,
  initials: '',
  questions: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING_GAME':
        return Object.assign({}, state, { loading: true })
      case 'START_GAME':
       return {...state, loading: false, questions: state.questions.concat(action.payload)};
      case 'ENDING_GAME':
        return Object.assign({}, state, { ending: true })
      case 'END_GAME':
      console.log(action.payload)
        // return { ...state, ending: false, questions: state.questions.concat(action.payload) };
      default:
        return state;
    }
  };