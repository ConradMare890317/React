import React from "react";
import ReactDOM from "react-dom";
import { AnimateKeyframes } from "react-simple-animate";
import { divStyle } from "./styles.js";

import "./App.css";

function App() {
  return (
    <AnimateKeyframes
      play
      duration={3}
      keyframes={["opacity: 0", "opacity: 1"]}
      iterationCount="infinite"
    >
      <div style={divStyle} />
    </AnimateKeyframes>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);