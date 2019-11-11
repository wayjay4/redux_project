const ADD_COUNTER = 'add_counter';
const SUBTRACT_COUNTER = 'subtract_counter';

function counterReducer(state={counter:0}, action={}){
  var newState;

  switch (action.type) {
    case ADD_COUNTER:
      newState = {
        ...state,
        counter: state.counter + action.payload.value,
        payload: action.payload
      };
      console.log("actionRequest: "+ADD_COUNTER);console.dir(newState);
      return newState;
    case SUBTRACT_COUNTER:
      newState = {
        ...state,
        counter: state.counter - action.payload.value,
        payload: action.payload
      };
      console.log("actionRequest: "+SUBTRACT_COUNTER);console.dir(newState);
      return newState;
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
