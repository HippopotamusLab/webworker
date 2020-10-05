import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const handleCounter = () => {
    console.log('App.js:8 handleCounter');
  }

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
        </a>
        <div className="counterBtn" onClick={handleCounter}>COUNTER</div>
      </header>
    </div>
  );
}

export default App;
