import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameCard from "./components/GameCard/"
import gamecards from "./gamecard.json"

class App extends Component {

  state = {
    gamecards
  };

  render() {
    return (
      <div>
        <GameCard></GameCard>
      </div>
    );
  }
}

export default App;
