import React, { useState } from 'react'


export default function Cards(props) {


    return (
        <div className="cards">
            <div className="image-container">
                <img src={props.img}/>
            </div>
            <p>{props.name}</p>

        </div>
    )
}