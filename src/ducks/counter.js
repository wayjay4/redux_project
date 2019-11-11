const ADD_COUNTER = 'add_counter';
const SUBTRACT_COUNTER = 'subtract_counter';

function counterReducer(state={counter:0}, action={}){
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.addBy,
        [action.payload.id]: action.payload
      };
    case SUBTRACT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload.subtractBy,
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

export function subtract_from_counter(payload){
  return {
    type: SUBTRACT_COUNTER,
    payload
  };
}

export default counterReducer;
