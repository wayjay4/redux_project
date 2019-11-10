import isLogged from './isLogged';
import counter from './counter';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  isLogged,
  counter
});

export default allReducers;
