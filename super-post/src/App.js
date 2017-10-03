import React, { Component } from 'react';
import './App.css';
// import LoginController from './views/Login/LoginController';
import LoginController from './views/Login/LoginController';
import PostController from './views/Post/PostController';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logout: true
    };
  }

  onSucces() {
    console.log("Se ha ingresado al sistema");
    this.setState({
      logout: false
    });
  }

  render() {
    if (this.state.logout) {
      return <LoginController onSuccess={ () => this.onSucces() } />;
    }

    return <PostController />;
  }

}