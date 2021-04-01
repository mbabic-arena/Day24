import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    const myCookieData = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Year="))
      .split("=")[1];
    const myLocalStorageData = localStorage.getItem("Paragon");
    const mySessionStorageData = sessionStorage.getItem("frontend");
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>
          Set Cookie
        </button>
        <button type="button" onClick={this.getMyStorage}>
          Get Cookie
        </button>
      </div>
    );
  }
}

export default App;
