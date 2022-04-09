import React, { useEffect, useState} from 'react'
import animeDatas from '../data'
import ScoreBoard from './Scoreboard'

export default function Content() {
    //useState variables
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    //check highscore
    const checkHighScore = () => {
        if (score > highScore){
            setHighScore(score)
        }
    }
    
    //shuffler
    useEffect(()=>{
        animeDatas.sort(()=> 0.5 - Math.random())
        checkHighScore()
    },[score])

    //check clicked
    const checkCard = (e) =>{
        animeDatas.find((animeData)=>{
            if(parseInt(e.target.id) === animeData.id){
                animeData.toggle = true
                // console.log(animeData)
                setScore((prevScore)=>{
                    return prevScore + 1
                })
            }  else{
                gameStatus(e)
            }
            // console.log(animeData)

        })
    }

    //check win or lose
    const gameStatus = (e) => {
        animeDatas.find((animeData)=>{
            if(animeData.toggle === true){
                animeData.toggle = false
                if (animeData.toggle === false){
                    console.log('ov')
                }
            } 
        })
    }



    //card finder/maker
    const showAnime = animeDatas.map((animeData)=>{
        return (
            <div className="card-container" key={animeData.id}>
                <div className="cards" onClick={checkCard} id={animeData.id}>
                    <img src={animeData.img} alt="anime pic"/>
                    <p>{animeData.name}</p>
                    {/* <p>{animeData.toggle}</p> */}
                </div>
            </div>
        )
    })

    return (
        <div className="card-container">
            {showAnime}
            <ScoreBoard
                score={score}
                highScore={highScore}
            />
        </div>
    )
}


// else if (animeData.toggle === false){
//     animeData.toggle = false
//     console.log('over')
//     setScore(0)
// }


    // check win or lose
    // const gameStatus = (e) => {
    //     animeDatas.find((animeData)=>{
    //         if(parseInt(e.target.id) === animeData.id){
    //             animeData.toggle = false
    //             alert('over')
    //         }
    //     })
    // }