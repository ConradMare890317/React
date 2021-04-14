import './App.css';
import React, { Component } from 'react';

const list = [
  {
    title: 'React ',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },

  {
    title: 'Redux ',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
];

//ES 5
function isSearched(searchTerm) {
  return function(item) {
  // some condition which returns true or false
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

//ES 6
// const isSearched = searchTerm => item =>
//  item.title.toLowerCase().includes(searchTerm.toLowerCase());
class App extends Component {

    constructor(props) {
      super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  
    
  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">

        <Search 
        value={searchTerm}
        onChange={this.onSearchChange}
        />

        <Table
        list={list}
        pattern={searchTerm}
        onDismiss={this.onDismiss}
        />

        <form>
          <input type="text" 
          value={searchTerm} 
          onChange={this.onSearchChange}/>
        </form>

        {this.state.list.filter(isSearched(this.state.searchTerm)) .map(item =>
          
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>

            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              
              <button
              onClick={() => this.onDismiss(item.objectID)}
              type="button"
              >
              Dismiss
              </button>
              </span>
          </div>
        )}
    </div>
    );
  }
}




export default App;