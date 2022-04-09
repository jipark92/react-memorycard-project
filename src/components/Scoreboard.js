import React from 'react';

export default function ScoreBoard(props) {
    return (
        <div className='score-container text-container'>
            <span className='score'>Score: <span className="score-number">{props.score}</span></span>
            <span className='high-score'> High Score: <span className='hscore-number'>{props.highScore}</span></span>
        </div>
    )
}