import React from 'react';
import './Choices.css';
import * as Components from '../..';
import { getImageURL } from '../../../utils/getImageURL';

const Choices = ({ choice: { name, image }, onClick = () => { } }) => {
    return (
        <div className='choice-container'>

            <div className="choice">
                <div className='container-bouton-parier' onClick={onClick}>
                    <Components.ClassicButton text='Parier' />
                </div>
                <div className="choice-background">
                    <img src={getImageURL(image)} alt="choice-background" />
                </div>
                <div className='choice-title'>
                    {name}
                </div>
            </div>

        </div>
    )
}

export { Choices }