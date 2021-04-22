import logo from './logo.svg';
import './App.css';

 const DEFAULT_DURATION = 0.3;
 const DEFAULT_EASE_TYPE = "linear";
 const DEFAULT_DIRECTION = "normal";
 const DEFAULT_FILLMODE = "none";
 const RUNNING = "running";
 const ALL = "all";

export { DEFAULT_DURATION, DEFAULT_EASE_TYPE, DEFAULT_DIRECTION, DEFAULT_FILLMODE, RUNNING, ALL, };
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

export { DEFAULT_DURATION, DEFAULT_EASE_TYPE, DEFAULT_DIRECTION, DEFAULT_FILLMODE, RUNNING, ALL, };
export default App;
