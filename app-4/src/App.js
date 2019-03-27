import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super() 

    this.state = {
      username: '',
      password: '',
    }
  }
  handleUserName(val) {
    this.setState({username: val})
  }

  handlePassword(val) {
    this.setState({password: val})
  }

  handleButton() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleUserName(e.target.value)} />
        <input onChange={e => this.handlePassword(e.target.value)} />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
