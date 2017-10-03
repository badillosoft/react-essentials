import React, { Component } from 'react';
import './App.css';
// import LoginController from './views/Login/LoginController';
import LoginContainer from './containers/LoginContainer';
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
    return <LoginContainer />;
  }

}