import React, { useEffect, useState} from 'react';
import animeDatas from '../data';
import ScoreBoard from './Scoreboard';
import Modal from './Modal';

export default function Content() {
    //useState variables
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameStatus, setGameStatus] = useState(false);

    //check highscore
    const checkHighScore = () => {
        if (score > highScore){
            setHighScore(score);
        }
    }
    
    //shuffler every score/gamestatus update
    useEffect(()=>{
        animeDatas.sort(()=> 0.5 - Math.random());
        checkHighScore();
    },[score,gameStatus])

    //check clicked
    const checkCard = (e) =>{
        animeDatas.find((animeData)=>{
            //check if card has been touched
            if(parseInt(e.target.id) === animeData.id){
                if(animeData.toggle === true){
                    setScore(0);
                    setGameStatus(true);
                    resetCards();
                    return;
                }
            };
            //marks the card as touched
            if(parseInt(e.target.id) === animeData.id){
                animeData.toggle = true;
                setGameStatus(false);
                setScore((prevScore)=>{
                    return prevScore + 1;
                })
                //if 20streaks, check win
                checkWinner();
            };
        })
    };

    //reset cards to default
    const resetCards = () => {
        animeDatas.find((animeData)=>{
            if (animeData.toggle === true){
                animeData.toggle = false;
            }
        })
    };

    //check to see if they won. get all 20 right in a row.
    const checkWinner = () => {
        if (score === animeDatas.length){
            alert('Congrats you beat the game! This is all you get! ;)');
        }
    };

    //card finder/maker
    const showAnime = animeDatas.map((animeData)=>{
        return (
                <div className="cards" key={animeData.id} onClick={checkCard} id={animeData.id}>
                    <img src={animeData.img} alt="anime pic"/>
                    <p>{animeData.name}</p>
                </div>
            
        )
    });

    return (
        <div className='content-container'>
            {/* game over modal box upon losing winning streak */}
            {gameStatus && <Modal click={()=>setGameStatus(false)}/>}
            <ScoreBoard
                score={score}
                highScore={highScore}
            />
            <div className="card-container"> 
                {showAnime}
            </div>
        </div>
    )
};