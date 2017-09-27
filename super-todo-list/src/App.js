import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: "",
      items: [],
    };

    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
  }

  changeDescriptionHandler(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <input onChange={ this.changeDescriptionHandler } placeholder="escribe una tarea" />
        <button>agregar</button>

        <ul>{ this.state.items }</ul>
      </div>
    );
  }

}
