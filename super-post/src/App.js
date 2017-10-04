import React, { Component } from 'react';
import './App.css';
// import LoginController from './views/Login/LoginController';
import LoginContainer from './containers/LoginContainer';
import PostContainer from './containers/PostContainer';

export default class App extends Component {

  render() {
    return <div className="app">
      <LoginContainer />
      <PostContainer />
    </div>;
  }

}