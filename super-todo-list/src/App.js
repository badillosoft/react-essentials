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
      description: "",
      tasks: tasks
    });

    document.getElementById(`input-desc-${this.props.id}`).value = "";
  }

  render() {
    const items = this.state.tasks.map((task, i) => {
      return (
        <li key={ `task-${this.props.id}-${i}` } ><input type="checkbox" checked={task.checked} /> { task.description }</li>
      );
    });

    return (
      <div className="container">
        <h1>{ this.props.title }</h1>

        <input id={ `input-desc-${this.props.id}` } 
          onChange={ (e) => this.changeDescription(e.target.value) } 
          placeholder="escribe una tarea" />

        <button disabled={ this.state.description.length <= 0 } onClick={ (e) => this.addTask(this.state.description) } >agregar</button>

        <ul>{ items }</ul>
      </div>
    );
  }

}
