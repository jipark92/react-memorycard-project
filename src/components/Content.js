import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import gameDatas from '../data'

export default function Content() {

    const [anime, setAnime] = useState(gameDatas)
    //shuffle card
    const showAllCards = anime.map((ani)=>{
        return(
            <Cards 
                key={ani.id}
                name={ani.name}
                img={ani.img}
            />
        )
    })
    const shuffledCards = showAllCards.sort(()=> 0.5 - Math.random())
    //

    return (
        <div className="content-container">
            {shuffledCards}
        </div>
    )
}