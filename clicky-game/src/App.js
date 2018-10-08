import React, { Component } from 'react';
import './App.css';
import GameCard from "./components/GameCard"
import gamecards from "./gamecards.json"
import Wrapper from "./components/Wrapper"

let guessedArray = [];

class App extends Component {

  score = {
    currentScore:0,
    highScore:0,
  }

  state = {
    gamecards,
  };

  updateScore = () => {
    this.setState({ score: this.score.currentScore = guessedArray.length });
    this.setState({ score: this.score.highScore = guessedArray.length });
  }

  guessCard = id => {
    console.log(this);

    let guessID = this.state.gamecards[id-1].id;
    // console.log(clickCheck);

    guessedArray.push(guessID);
    this.updateScore();
    
    console.log(this.score.currentScore);
    // console.log(guessedArray);

  }

  render() {
    return (
      <Wrapper>
      <h1>Score: {this.score.currentScore} </h1>
      <h1> High Score: {this.score.highScore}</h1>
        {this.state.gamecards.map(gamecard => (
        <GameCard
          state= {this.beenClicked}
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
