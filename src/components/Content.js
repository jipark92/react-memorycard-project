import React from 'react'
import Game from './Game'
import gameDatas from '../data'

export default function Content() {

    const showAllCards = gameDatas.map((gameData)=>{
        return(
            <Game 
                key={gameData.id}
                id={gameData.id}
                name={gameData.name}
                img={gameData.img}
                
            />
        )
    })

    return (
        <div className="content-container">
            {showAllCards}
        </div>
    )
}
