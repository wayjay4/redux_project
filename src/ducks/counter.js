const ADD_COUNTER = 'add_counter';

function counterReducer(state={counter:0}, action={}){
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.addBy,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
}

// action creator
export function add_to_counter(payload){
  return {
    type: ADD_COUNTER,
    payload
  };
}

export default counterReducer;
