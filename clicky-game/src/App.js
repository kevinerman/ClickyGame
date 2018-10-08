import React, { Component } from 'react';
import './App.css';
import GameCard from "./components/GameCard"
import gamecards from "./gamecards.json"
import Wrapper from "./components/Wrapper"

class App extends Component {

  state = {
    gamecards
  };

  guessCard = id => {
    const gamecards = this.state.gamecards;

    console.log(gamecards[id-1]);
  }

  render() {
    return (
      <Wrapper>
        {this.state.gamecards.map(gamecard => (
        <GameCard
          guessCard={this.guessCard}
          id={gamecard.id}
          key={gamecard.id}
          image={gamecard.image}
        />
    ))}
    </Wrapper>
    );
  }
}

export default App;
