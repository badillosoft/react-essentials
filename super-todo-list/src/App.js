import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: "",
      tasks: [],
    };
  }

  changeDescription(newDescription) {
    this.setState({
      description: newDescription,
    });
  }

  addTask(description) {
    if(!description) {
      return;
    }

    const tasks = this.state.tasks;

    tasks.push({
      description: description,
      checked: false,
    });

    this.setState({
      tasks: tasks
    });

    const input_desc = document.getElementById("input-desc");
    input_desc.value = "";
  }

  render() {
    const items = this.state.tasks.map(task => {
      return (
        <li><input type="checkbox" checked={task.checked} /> { task.description }</li>
      );
    });

    return (
      <div className="container">
        <input id="input-desc" onChange={ (e) => this.changeDescription(e.target.value) } placeholder="escribe una tarea" />
        <button onClick={ (e) => this.addTask(this.state.description) } >agregar</button>

        <ul>{ items }</ul>
      </div>
    );
  }

}
