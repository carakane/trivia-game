const initialState = {
  loading: '',
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
      default:
        return state;
    }
  };