import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {increment, decrement, auth} from './action'

function App() {
  const counter = useSelector(state => state.counter)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const btnText = login ? 'Logout': "Login"
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <p>{login? <h3>Logined</h3>: <h3>Not yet login</h3>}</p>
      <button onClick={()=>dispatch(auth())}>{btnText}</button>

    </div>
  );
}

export default App;
