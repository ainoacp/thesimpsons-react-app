import React from "react";
import './Card.scss'

export default function Card({character, index}) {
    return (
        <div key={index} className={character.characterDirection === "Right" ? "Right" : "Left"}>
            <div>
                <h4>{character.character}:</h4>
                <p>"{character.quote}"</p>
            </div>
            <img src={character.image} alt={character.character} />
            
        </div>
    )
}