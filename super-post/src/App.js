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
        <Post user={ ({ picture: "http://placehold.it/300x300", displayName: "Ash Ketchum" }) }
          post={ ({ content: "Hola mundo", left: "32 min" })} />
      </div>
    );
  }

}