import React, { Component } from 'react';
import './App.css';
// import LoginController from './views/Login/LoginController';
import LoginController from './views/Login/LoginController';
import PostList from './views/Post/PostList';

export default class App extends Component {

  //<LoginController />

  render() {
    return (
      <div>
        <PostList />
      </div>
    );
  }

}