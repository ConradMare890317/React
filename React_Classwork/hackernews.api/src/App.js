import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

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


class App extends Component {

    constructor(props) {
      super(props);

          this.state = {
            result: null,
            searchTerm: 'DEFAULT_QUERY',
          };

          this.setSearchTopStories = this.setSearchTopStories.bind(this);
          this.onDismiss = this.onDismiss.bind(this);
        }

                setSearchTopStories(result) {
                  this.setState({ result });
                }

                componentDidMount() {
                  const { searchTerm } = this.state;

                  fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
                    .then(response => response.json())
                    .then(result => this.setSearchTopStories(result))
                    .catch(error => error);
                  }
                
                  onDismiss(id) {
                      const isNotId = item => item.objectID !== id;
                      const updatedHits = this.state.result.hits.filter(isNotId);
                      this.setState({
                        result: Object.assign({}, this.state.result, { hits: updatedHits })
                      });
                    }
    
  render() {

      const { searchTerm, result } = this.state;

          if (!result) { return null; }

              return (
                <div className="page">
                  <div className="interactions">

                  <Table
                      list={result.hits}
                      pattern={searchTerm}
                      onDismiss={this.onDismiss}
                    />
                  </div>

                  <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                    >
                    Search
                    </Search>
                </div> 
    );
  }
}

const Table = ({ list, pattern, onDismiss }) =>

      <div className = "table">
        {list.filter(setSearchTopStories(pattern)).map(item =>
          
          <div key={item.objectID} className="table-row">

            <span style={{ width: '40%' }}>
              <a href={item.url}>{item.title}</a>
            </span>

            <span style={{ width: '30%' }}>
              {item.author}
            </span>

            <span style={{ width: '10%' }}>
              {item.num_comments}
            </span>

            <span style={{ width: '10%' }}>
              {item.points}
            </span>
              
              <span style={{ width: '10%' }}>
                <Button onClick={() => onDismiss(item.objectID)}
                        className="botton-inline"
                >
                  Dismiss
                </Button>
              </span>

          </div>
        )}
      </div>

function Search(props) {
  const { value, onChange, children } = props;
  return (
    <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
      />
    </form>
  );
}
class Button extends Component {
  
  render() {
  
    const {
      onClick,
      className='',
      children,
      } = this.props;

  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
    );
  }
}



export default App;
