import React from "react";
import Card from '../Card/Card'

export default function Gallery({characters}) {
    return (
        <div className="gallery">
        {characters.map((character, index) => 
            <Card character={character} key={index}/>)}
        </div>
    ) 
}



