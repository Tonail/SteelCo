import React, { Component } from "react";
import Dashboard from "./containers/dashboard";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello",
      menuClps: true,
      menuState: "0"
    };
  }
  menuHider = () => {
    if (this.state.menuClps === true) {
      this.setState({
        menuState: "-295px",
        menuClps: false
      });
    } else if (this.state.menuClps === false) {
      this.setState({
        menuState: 0,
        menuClps: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <button className="menu-expand" onClick={this.menuHider}>
            menu
          </button>
        </div>
        <div className="menu" style={{ left: this.state.menuState }}>
          <div className="menu-logo">
            <img src={require("./imgs/phlogo.svg")} alt="logo" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <div
                  className={
                    this.state.menuClps === true
                      ? "nav-btn"
                      : "nav-btn nav-btn-clps"
                  }
                >
                  <a>Home</a>
                </div>
              </li>
              <li>
                <div
                  className={
                    this.state.menuClps === true
                      ? "nav-btn"
                      : "nav-btn nav-btn-clps"
                  }
                >
                  <a>Workouts</a>
                </div>
              </li>
              <li>
                <div
                  className={
                    this.state.menuClps === true
                      ? "nav-btn"
                      : "nav-btn nav-btn-clps"
                  }
                >
                  <a>Recepies</a>
                </div>
              </li>
              <li>
                <div
                  className={
                    this.state.menuClps === true
                      ? "nav-btn"
                      : "nav-btn nav-btn-clps"
                  }
                >
                  <a>Blog</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu-text">
            <h2> Im the title </h2>
            <p> Here rest filler text</p>
          </div>
          <div className="account">
            <ul>
              <li>
                <button>login</button>
              </li>
              <li>
                <button>sign up</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <Dashboard />
        </div>
        <div className="footer" />
      </div>
    );
  }
}
