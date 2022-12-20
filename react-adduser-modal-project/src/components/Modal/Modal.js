import React from 'react';

const Modal = () => {
    return (
        <div className='modal'>
            <div className='modal-header'>
            </div>
            <div className='modal-body'>
                <p> Please enter a valid name and age (non-empty values) </p>
            </div>
            <button className='modal-button'> Okay </button>
        </div>
    )
};

export default Modal;