import React, { useState } from 'react'


export default function Game(props) {


    return (
        <div className="cards">
            <div className="image-container">
                <img src={props.img}/>
            </div>
            <p>{props.name}</p>

        </div>
    )
}
