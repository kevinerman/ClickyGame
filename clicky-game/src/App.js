import React, { Component } from 'react';
import './App.css';
import GameCard from "./components/GameCard"
import gamecards from "./gamecards.json"
import Wrapper from "./components/Wrapper"

let guessedArray = [];
// let gameOn = false;
let randomArray = [];

const randomizeNumber = () => {
  let randomNumber = Math.floor((Math.random() * 12) + 1)
  return(randomNumber)
}

const randomizePosition = () => {
  let randomNumber = randomizeNumber();

  if (randomArray.length < 12) {
    if (randomArray.includes(randomNumber)) {
      randomizePosition()
    } else {
      randomArray.push(randomNumber);
      randomizePosition();
    }
  }

}

class App extends Component {

  arrayCheck = id => {
    if (guessedArray.includes(id)) {
      this.setState({ score: this.score.currentScore = 0 });
      alert("you lose");
      guessedArray = [];
      return true
    } else {
      return false
    }
  }

  score = {
    currentScore: 0,
    highScore: 0,
  }

  state = {
    gamecards,
  };

  updateScore = () => {
    randomArray = [];
    randomizePosition();
    this.setState({ score: this.score.currentScore = guessedArray.length });
    if (this.score.highScore < guessedArray.length) {
      this.setState({ score: this.score.highScore = guessedArray.length })
    };
  }

  guessCard = id => {

    let guessID = this.state.gamecards[id - 1].id;
    // console.log(clickCheck);

    if (!this.arrayCheck(guessID)) {
      guessedArray.push(guessID);
      this.updateScore();
    }

    console.log(guessedArray);
  }

  render() {
    return (
      <div>
        <h1>Score: {this.score.currentScore} </h1>
        <h1> High Score: {this.score.highScore}</h1>
        <Wrapper>
          {this.state.gamecards.map(gamecard => (
            <GameCard
              position={"position" + randomArray[gamecard.id - 1]}
              guessCard={this.guessCard}
              id={gamecard.id}
              key={gamecard.id}
              image={gamecard.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
