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
      // action.payload.forEach(function(item) {
      //   const question = {
      //     value: item.value,
      //     category: item.category.title,
      //     clue: item.clue,
      //     answer: item.answer,
      //   };
      //   // return state.concat(question)
      // });
      // state.concat(action.payload);
      // console.log(state.concat(action.payload))
        // console.log(state.questions.concat(action.payload))
      return {...state, loading: false, questions: state.questions.concat(action.payload)};
 
      default:
        return state;
    }
  };