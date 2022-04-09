import React from 'react';

export default function ScoreBoard(props) {
    return (
        <div className='score-container text-container'>
            <span Style="font-size: 1.5rem" className='score'>Score: <span className="score-number">{props.score}</span></span>
            <span Style="font-size: 1.5rem" className='high-score'> High Score: <span className='hscore-number'>{props.highScore}</span></span>
        </div>
    )
}