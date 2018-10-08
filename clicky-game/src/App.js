import React, { Component } from 'react';
import './App.css';
import GameCard from "./components/GameCard"
import gamecards from "./gamecards.json"
import Wrapper from "./components/Wrapper"

class App extends Component {

  state = {
    gamecards
  };

  render() {
    return (
      <Wrapper>
        {this.state.gamecards.map(gamecard => (
        <GameCard
          image={gamecard.image}
        />
    ))};
    </Wrapper>
    );
  }
}

export default App;
