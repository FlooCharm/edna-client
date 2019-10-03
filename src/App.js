import React, { useState, useEffect } from 'react';

import Router from './Router';

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
      <Router />
    </div>
  );
}

export default App;
