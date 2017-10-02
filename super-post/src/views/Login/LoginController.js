import React, { Component } from 'react';
import Login from './Login';

export default class LoginController extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: "",
      success: false,
      loading: false
    }
  }

  onLogin(email, password) {
    this.setState({
      loading: true
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
            error: "Error al iniciar sesión",
            loading: false
        });
    }).then(data => {
        let error = "";
        let success = false;

        if (data.error) {
            error = data.error;
        } else {
            success = true;
        }

        this.setState({
            error: error,
            success: success,
            loading: false
        });
    });
  }

  render() {
    return (
      <Login error={this.state.error} success={this.state.success}
        loading={this.state.loading}
        onLogin={ (email, password) => this.onLogin(email, password) } />
    );
  }
}
