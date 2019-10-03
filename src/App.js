import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [apiResponse, setResponse] = useState()

  useEffect(() => {
    callAPI();
  }, [])

  function callAPI() {
    fetch("http://localhost:3007/testAPI")
        .then(res => res.text())
        .then(res => setResponse(res));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiResponse}
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
