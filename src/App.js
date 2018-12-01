import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showName: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.showName && (
            <>
              <label for="Name">Please enter your Name</label>
              <input
                name="Name"
                onChange={event => this.setState({ name: event.target.value })}
              />
              <button onClick={() => this.setState({ showName: true })}>
                Done
              </button>
            </>
          )}
          <p>{this.state.showName && hi(this.state.name)}</p>
        </header>
      </div>
    );
  }
}

export default App;

function hi(name) {
  return "Hello " + name;
}
