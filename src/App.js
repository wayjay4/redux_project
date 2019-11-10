import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions/index';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      <p>Counter is currently: {counter}</p>
      <p>
        <button>+</button>
        <button>-</button>
      </p>

      <br /><br />
      <p>{isLogged ? "you are logged in" : "please login"}</p>
    </div>
  );
}

export default App;
