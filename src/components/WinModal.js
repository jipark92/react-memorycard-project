import React from 'react'

export default function WinModal(props) {

    return (
        <div className='modal-container'>
            <div className='modal'>
                <h1 className='gamestatus-text'>WINNER</h1>
                <button className='close-btn' onClick={props.click}>CLOSE</button>
            </div>
        </div>
    )
}
