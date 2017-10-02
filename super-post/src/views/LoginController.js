import React, { Component } from 'react';
import Login from './Login';

export default class LoginController extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login_error: "",
      login_success: false,
      login_loading: false
    }
  }

  onLogin(email, password) {
    this.setState({
      login_loading: true
    });

    setTimeout(() => {
      this.setState({
        login_loading: false
      });

      if (email === "ash@pokemon.com" && password === "pikachu") {
        this.setState({
          login_success: true
        });
        return;
      }
  
      this.setState({
        login_error: "No se ha podido iniciar sesión, verifica los datos de acceso"
      });
    }, 2000);
  }

  render() {
    return (
      <Login error={this.state.login_error} success={this.state.login_success}
        loading={this.state.login_loading}
        onLogin={ (email, password) => this.onLogin(email, password) } />
    );
  }
}
