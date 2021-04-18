import React from "react";
import ReactDOM from "react-dom";
import { AnimateKeyframes } from "react-simple-animate";
import { divStyle  } from "./styles";

import "./styles.css";

  function App() {
    return (
      <AnimateKeyframes
      play={true}
      pause={true}
      iterationCount="infinite"
      direction="alternate"
      duration={5}
      keyframes={[
        'transform: rotateX(0) rotateY(0) rotateZ(0)',
        'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
      ]}
  
      >
        <div style={divStyle} />
      </AnimateKeyframes>

    );
  }


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);