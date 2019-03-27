import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: '',
      list: ['rice', 'eggs', 'rice', 'eggs']
    };
  }

  handleChange(filtr) {
  this.setState({filter: filtr})
}

  render() {
    let foodsToDisplay = this.state.list.filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>; 
    });

    return (
      <div className='App'>
      <input onChange={e => this.handleChange(e.target.value)} />
      {foodsToDisplay}
      </div>
    )
  }
}


export default App;
