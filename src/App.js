import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FollowMove from './FollowMove'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FollowMove />
        </header>
      </div>
    );
  }
}

export default App;
