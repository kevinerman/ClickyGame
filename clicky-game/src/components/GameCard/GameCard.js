import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div className="card" position={props.position}>
        <div onClick={() => props.guessCard(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} id={props.id}/>
            </div>
        </div>
    </div>
);

export default GameCard;