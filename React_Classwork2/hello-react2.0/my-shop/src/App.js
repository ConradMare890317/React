import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a
            className="App-link"
            href="https://github.com/ConradMare890317"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conrad Maré
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