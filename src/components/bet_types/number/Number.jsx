import React from 'react';
import './Number.css';
import * as Components from '../../../components';

const Number = () => {
    return (
        <div className='number-container'>
            <input type="text" id='input-objet' placeholder="Nombre..." />
            <Components.ClassicButton text="Parier" />
        </div>
    )
}

export { Number }