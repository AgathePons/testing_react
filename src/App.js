import React, { Component } from 'react';
import './App.scss';
import WelcomeTest from './header.js';
import OpenableDiv from './openable.js';

class App extends Component {
  render() {
    console.log(`On render ${this.__proto__.constructor.name}.`)
    return (
      <div className="tests">
      <div class="bg"></div>
        <h1>Dire bonjour...</h1>
        <WelcomeTest name="😀" />
        <WelcomeTest name="you"/>
        <OpenableDiv />
      </div>
    )
  }
}

export default App