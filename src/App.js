import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function QueryParamsExample() {
  return (
    <div className="App">
      <header className="App-header">
    <Router>
      <QueryParamsDemo />
    </Router>
    </header>
    </div>
  );
}

//function QueryParamsDemo() {
class QueryParamsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let query = this.state.value;
    axios.get('http://localhost:80/django/api/' + query)
      .then(res => {
        console.log('response is.. : ' + JSON.stringify(res));
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
  return (
    <div>
      <div>
      <p>
          Submit your query.
	          <form onSubmit={this.handleSubmit}>
              Query: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
           
            <input type="submit" value="Submit" />
            </form>
        </p>
        <Child query={this.state.value} />
      </div>
    </div>
  );
  }
}

function Child({ query }) {
  return (
    <div>
      {query ? (
        <h3>
          Your <code>query</code>  is &quot;{query}
          &quot;
        </h3>
      ) : (
        <h3>There is no query string</h3>
      )}
      <h3>
          Let's query it to the django server side!
      </h3>
    </div>
  );
}
