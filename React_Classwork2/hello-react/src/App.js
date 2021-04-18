import React from "react";
import ReactDOM from "react-dom";
import { Animate } from "react-simple-animate";
import { divStyle, buttonStyle } from "./styles";
import logo from './logo.svg';
import './App.css';

function App() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
         </header>
        </div>
     
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
