import isLogged from './isLogged';
import counter from './counter';
import counterState from '../ducks/counter';
import isLoggedState from '../ducks/isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  isLogged,
  counter,
  counterState,
  isLoggedState
});

export default allReducers;
