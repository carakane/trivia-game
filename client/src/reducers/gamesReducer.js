const initialState = {
  score: '',
  clueCount: '',
  initials: '',
  questions: []
}

export default (state = initialState, action) => {
    switch (action.type) {
  
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
      return {questions: state.concat(action.payload)};
 
      default:
        return state;
    }
  };