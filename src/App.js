import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Basic YTFAZ21haWwuY29tOnAx';

global.fetchProducts = function() {

	// Make a request for a user with a given ID
	axios.get('http://127.0.0.1:8080/product')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.err(error);
	  })
	  .finally(function () {
		 console.log('done');
	  });
}

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
}

export default App;
