import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className='score-container'>
            <h3 className='score'>Score: {props.score}</h3>
            <h3 className='high-score'> High Score: {props.highScore}</h3>
        </div>
    )
}
