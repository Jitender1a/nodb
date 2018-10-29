import React, { Component } from 'react';
import './App.css';
import Music from './components/Music';
import Api from './components/Api';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Music/>
        <Api/>   
      </div>
    )
  }
}

export default App;
