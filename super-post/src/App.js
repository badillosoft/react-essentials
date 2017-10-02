import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/Login';

class App extends Component {
  render() {
    return (
      <Login onLogin={ (email, password) => { console.log("LOGIN", email, password); } } />
    );
  }
}

export default App;
