const LOGIN_IN = 'log_in_user';
const LOG_OUT = 'log_out_user';

// reducer creator
function isLoggedReducer(state={isLogged:false}, action={}){
  var newState;

  switch (action.type) {
    case LOGIN_IN:
      newState = {
        ...state,
        isLogged: true,
        payload: action.payload
      };
      console.log("actionRequest: "+LOGIN_IN);console.dir(newState);
      return newState;
    case LOG_OUT:
      newState = {
        ...state,
        isLogged: false,
        payload: action.payload
      };
      console.log("actionRequest: "+LOG_OUT);console.dir(newState);
      return newState;
    default:
      return state;
  }
}

// action creator
export function login_user(payload){
  return {
    type: LOGIN_IN,
    payload
  };
}

export function logout_user(payload){
  return {
    type: LOG_OUT,
    payload
  };
}

export default isLoggedReducer;
