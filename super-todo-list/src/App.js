import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    const items = [];

    for (let i = 0; i < 100; i++) {
      items.push(
        <li>
          <input type="checkbox" /> TAREA EJEMPLO { i } 
        </li>
      );
    }

    return (
      <div className="App">
        <h1>Super TO-DO List App</h1>
        <input type="text" placeholder="Escribe una tarea" />
        <button>agregar</button>
        <ul>{ items }</ul>
      </div>
    );
  }
}
