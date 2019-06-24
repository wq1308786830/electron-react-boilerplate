import React from 'react';
import { FriendsMaker } from './pages/FriendsMaker';
import { MatchMaker } from './pages/MatchMaker';
import { StoreProvider } from './store';
import logo from './logo.svg';
import './App.scss';

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
      <StoreProvider>
        <FriendsMaker />
        <MatchMaker />
      </StoreProvider>
    </div>
  );
}

export default App;
