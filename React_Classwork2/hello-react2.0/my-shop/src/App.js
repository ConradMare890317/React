import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
=======
import Catalog from './Catalog';
import About from './About';
import WineMakers from './WineMakers';
import { Switch, Route, Link } from 'react-router-dom';
>>>>>>> a8f3c19671d1dabcd02462b3c05bdc552594974e

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
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
=======
          <h1 className="App-title">The Catalog App</h1>
          <nav>
            <ul>
              <li><Link to='/'>Catalog</Link></li>
              <li><Link to='/winemakers'>WineMakers</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
		<Switch>
		   <Route exact path='/' component={Catalog}/>
       <Route path='/winemakers' component={WineMakers}/>
		   <Route path='/about' component={About}/>
		</Switch>
>>>>>>> a8f3c19671d1dabcd02462b3c05bdc552594974e
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a8f3c19671d1dabcd02462b3c05bdc552594974e
