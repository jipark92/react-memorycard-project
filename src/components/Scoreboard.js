import React from 'react';

export default function ScoreBoard(props) {
    return (
        <div className='score-container'>
            <h2 className='score'>Score: {props.score}</h2>
            <h2 className='high-score'> High Score: {props.highScore}</h2>
        </div>
    )
}