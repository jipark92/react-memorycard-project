import React, { useEffect, useState} from 'react'
import animeDatas from '../data'

export default function Content() {

    const [score, setScore] = useState(0)

    //shuffler
    useEffect(()=>{
        animeDatas.sort(()=> 0.5 - Math.random())
    },[score])

    //check clicked
    const checkCard = (e) =>{
        animeDatas.find((animeData)=>{
            if(parseInt(e.target.id) === animeData.id){
                animeData.toggle = true
                setScore((prevScore)=>{
                    return prevScore + 1
                })
            }
            console.log(animeData)
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
            
        </div>
    )
}



// setScore((prevScore)=>{
//         return prevScore + 1
//     })