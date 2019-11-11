import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter is currently: {counter}</p>
      <p>
        <button onClick={() => dispatch(increment({addBy: 5}))}>+</button>
        <button onClick={() => dispatch(decrement({subtractBy: 3}))}>-</button>
      </p>

      <br /><br />
      <p>{isLogged ? "you are logged in" : "please login"}</p>
    </div>
  );
}

export default App;
