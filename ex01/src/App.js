import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>
          Set Cookie
        </button>
      </div>
    );
  }
}

export default App;
