import React, {useState} from 'react'

export default function Heading() {

    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    const checkHighScore = () => {
        if (score > highScore){
            setHighScore(score)
        }
    }
    checkHighScore()
    

    return (
        <header className="title-container">
            <h2>Score: {score} </h2>
            <h2>Memory Card</h2>

            <h3>High Score: {highScore}</h3>
        </header>
    )
}
