import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [hangover, setHangover] = useState(0);

  const testWebWorker = new Worker('./workers/testWorker.js');

  useEffect(() => {
    testWebWorker.onmessage = (_event) => {
      if (_event && _event.data) {
        setHangover(_event.data);
      }
    };
  }, [testWebWorker]);

  const handleCounter = () => {
    setCounter(counter + 1);
    console.log('App.js:10 handleCounter');
  }

  const handleHangover = () => {
    testWebWorker.postMessage({msg: 'testWebWorker', countTest: hangover});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>counter: {counter}</code>
        </p>
        <p>
          <code>hangover: {hangover}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div className="container">
          <div className="counterBtn" onClick={handleCounter}>COUNTER</div>
          <div className="counterBtn" onClick={handleHangover}>HANGOVER</div>
        </div>
      </header>
    </div>
  );
}

export default App;
