import React, { Component } from 'react';
import './App.css';
// import LoginController from './views/Login/LoginController';
import LoginController from './views/Login/LoginController';
import Post from './views/Post/Post';

export default class App extends Component {

  //<LoginController />

  render() {
    return (
      <div>
        <Post />
      </div>
    );
  }

}