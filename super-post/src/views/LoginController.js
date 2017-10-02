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

    fetch("http://10.19.0.247:3000/api/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ email, password })
    }).then(result => result.json(), err => {
        this.setState({
            login_error: "Error al iniciar sesión",
            login_loading: false
        });
    }).then(data => {
        console.log("data", data);

        let error = "";
        let success = false;

        if (data.error) {
            error = data.error;
        } else {
            success = true;
        }

        this.setState({
            login_error: error,
            login_success: success,
            login_loading: false
        });
    });
  }

  render() {
    return (
      <Login error={this.state.login_error} success={this.state.login_success}
        loading={this.state.login_loading}
        onLogin={ (email, password) => this.onLogin(email, password) } />
    );
  }
}
