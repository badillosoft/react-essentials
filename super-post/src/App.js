import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/Login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login_error: "",
      login_success: false
    }
  }

  onLogin(email, password) {
    setTimeout(() => {
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
        onLogin={ (email, password) => this.onLogin(email, password) } />
    );
  }
}

export default App;
