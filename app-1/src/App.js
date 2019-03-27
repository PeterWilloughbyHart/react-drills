import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Input from './components/Input.js';

class App extends Component {
  constructor() {
    super();

    this.state ={
      inputText: ''
    }
  }

  handleChange(val) {
    this.setState({inputText: val})
  };

  render() {
    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)}></input>
        <p>{this.state.inputText}</p>
      </div>
    )
  }
}

export default App;
