import React, { useEffect, useState} from 'react';
import animeDatas from '../data';
import ScoreBoard from './Scoreboard';
import LoseModal from './LoseModal';
import WinModal from './WinModal';

export default function Content() {
    //useState variables
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameLostStatus, setGameLostStatus] = useState(false);
    const [gameWonStatus, setGameWonStatus] = useState(false);
    //check highscore
    const checkHighScore = () => {
        if (score > highScore){
            setHighScore(score);
        }
    };
    checkHighScore();
    //shuffler every score/gamestatus render
    useEffect(()=>{
        animeDatas.sort(() => 0.5 - Math.random());
    },[score,gameLostStatus,gameWonStatus])
    //check clicked function
    const checkCard = (e) =>{
        animeDatas.find((animeData)=>{
            //check if same card then reset game
            if(parseInt(e.target.id) === animeData.id){
                if(animeData.toggle === true){
                    setScore(0);
                    setGameLostStatus((prevLostStatus) => prevLostStatus = !prevLostStatus);
                    resetCards();
                    return;
                }
            };
            //marks the card as touched
            if(parseInt(e.target.id) === animeData.id){
                animeData.toggle = true;
                setGameLostStatus(false);
                setScore((prevScore)=>{
                    return prevScore + 1;
                })
                //check win if user wins 20 in a row
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
    //check to see if user got all 20 in a row.
    const checkWinner = () => {
        if (score === animeDatas.length){
            setGameWonStatus(true);
        }
    };
    //card find then make
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
            {/* game over modal upon ending win streak */}
            {gameLostStatus && <LoseModal click={()=>setGameLostStatus(false)}/>}
            {/* game win modal upon getting 20 in a row*/}
            {gameWonStatus && <WinModal click={()=>setGameWonStatus(false)}/>}
            <ScoreBoard
                score={score}
                highScore={highScore}
            />
            <div className="card-container"> 
                {/* render shuffle cards */}
                {showAnime}
            </div>
        </div>
    )
};