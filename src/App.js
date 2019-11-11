import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/counter';
import {login, logout} from './actions/isLogged';
import {add_to_counter, subtract_from_counter} from './ducks/counter'; // ducks pattern: stores both reducer and action together instead of seperate files
import {login_user, logout_user} from './ducks/isLogged';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const counterState = useSelector(state => state.counterState);
  const isLoggedState = useSelector(state => state.isLoggedState);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <p>Counter is currently: {counter}</p>
        <p>
          <button onClick={() => dispatch(increment({addBy: 5}))}>+</button>
          <button onClick={() => dispatch(decrement({subtractBy: 3}))}>-</button>
        </p>
        <p>
          counterState is currently (ducks): {counterState.counter}
          <br />
          <button onClick={() => dispatch(add_to_counter({value:10}))}>+</button>
          <button onClick={() => dispatch(subtract_from_counter({value:2}))}>-</button>
        </p>
      </div>

      <br /><br />

      {
        isLogged ?
        <div>
          <p>you are logged in</p> <p><button onClick={() => dispatch(logout({}))}>Logout</button></p>
        </div>
        :
        <div>
          <p>please login</p> <p><button onClick={() => dispatch(login({}))}>Login</button></p>
        </div>
      }

      <br />

      {
        isLoggedState.isLogged ?
        <div>
          <p>you are logged in</p> <p><button onClick={() => dispatch(logout_user({}))}>Logout</button></p>
        </div>
        :
        <div>
          <p>please login (ducks)</p> <p><button onClick={() => dispatch(login_user({}))}>Login</button></p>
        </div>
      }
    </div>
  );
}

export default App;
