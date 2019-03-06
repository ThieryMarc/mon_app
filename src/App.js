import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './components/PureCompo';
import StateCompo from './components/StateCompo';
import CompoCycleDeVie from './components/CompoCycleDeVie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CompoCycleDeVie name="Eco"/>
          <PureCompo/>
          <PureCompoProps label={'Marc'} age={21}/>
          <StateCompo name={'Marc'}/>
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
}

export default App;
