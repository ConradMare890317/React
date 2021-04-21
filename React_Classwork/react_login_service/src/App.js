import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';


class App extends Component {
  
    render() {
        return (

          <div>
            <Products />
            <Button>Default</Button>
          </div>

          
        );
    }
}

export default App;
