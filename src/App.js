import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/counter';
import {login, logout} from './actions/isLogged';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <p>Counter is currently: {counter}</p>
        <p>
          <button onClick={() => dispatch(increment({addBy: 5}))}>+</button>
          <button onClick={() => dispatch(decrement({subtractBy: 3}))}>-</button>
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
    </div>
  );
}

export default App;
