import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fadeIn } from 'animate-keyframes';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Conrad Maré</h1>
          <a
            className="App-link"
            href="https://github.com/ConradMare890317"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <p>          
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."          
          </p>
          </header>
      </div>
    );
  }
}

export default App;
