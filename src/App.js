import React from 'react';
import { Route } from 'react-router-dom'
import SignUp from './Components/SignUp'
import './App.css';
import LogIn from './Components/Login';

function App() {


  return (
    <div className="App">
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
    </div>
  );
}

export default App;
