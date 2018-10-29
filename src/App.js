import React, { Component } from 'react';
import './App.css';
import Music from './components/Music';
import Api from './components/Api';
import Artist from './components/Artist'
import Toptracks from './components/Toptracks'
import Topartist from './components/Topartist'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Music/>
        <Toptracks/>
        <Topartist/>
        <Artist/> 
        <Api/>
         
        
        
      </div>
    )
  }
}

export default App;
