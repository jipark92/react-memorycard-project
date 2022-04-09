import React from 'react';

export default function WinModal(props) {
    return (
        <div className='modal-container'>
            <div className='modal'>
                <h1 className='gamestatus-text'>OH WOW YOU WON! THATS ALL! NO COOKIES FOR YOU! ;)</h1>
                <button className='close-btn' onClick={props.click}>Play Again</button>
            </div>
        </div>
    )
}