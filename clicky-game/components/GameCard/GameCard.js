import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div className="card">
        <div onClick={() => props.guessCard(props.id)} className="guess">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    </div>
);

export default GameCard;