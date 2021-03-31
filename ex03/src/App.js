import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>
          Set Local Storage
        </button>
      </div>
    );
  }
}

export default App;
