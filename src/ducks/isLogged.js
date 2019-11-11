const LOGIN_IN = 'log_in_user';
const LOG_OUT = 'log_out_user';

// reducer creator
function isLoggedReducer(state={isLogged:false}, action={}){
  switch (action.type) {
    case LOGIN_IN:
      return {
        ...state,
        isLogged: true,
        [action.payload.id]: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        [action.payload.id]: action.payload
      };
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

export function editIsLogged(payload){
  return {
    type: payload.actionRequest,
    payload: payload.params
  };
}

export default isLoggedReducer;
