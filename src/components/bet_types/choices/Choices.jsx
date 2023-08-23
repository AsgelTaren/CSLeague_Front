import React from 'react';
import './Choices.css';
import * as Assets from '../../../assets';
import * as Components from '../..';

const Choices = ({ choice: { name, background }, onClick = () => { } }) => {
    return (
        <div className='choice-container'>

            <div className="choice">
                <div className='choice-title'>
                    {name}
                </div>
                <div className='container-bouton-parier' onClick={onClick}>
                    <Components.ClassicButton text='Parier' />
                </div>
                <div className="choice-background">
                    <img src={background} alt="choice-background" />
                </div>
            </div>

        </div>
    )
}

export { Choices }