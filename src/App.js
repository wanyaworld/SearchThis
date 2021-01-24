import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Submit your query.
	  <form>
            <label>
              Query: 
                <input type="text" name="query" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </p>
      </header>
    </div>
  );
}

export default App;
