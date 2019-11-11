import isLogged from './isLogged';
import counter from './counter';
import counterState from '../ducks/counter'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  isLogged,
  counter,
  counterState
});

export default allReducers;
