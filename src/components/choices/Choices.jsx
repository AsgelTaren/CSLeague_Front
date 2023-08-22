import React from 'react';
import './Choices.css';
import * as Assets from '../../assets';
import * as Components from '../../components';

const Choices = ({ choice_data }) => {
    const choiceName = choice_data[0];
    const choiceBg = choice_data[1];

    // console.log(choice_data);
    // console.log(choiceName, choiceBg);
    return (
        <div className='choice-container'>

            <div className="choice" onClick={() => { console.log('choiceClick') }}>
                <div className='choice-title'>
                    {choiceName}
                </div>
                <div className='container-bouton-parier'>
                    <Components.ClassicButton text='Parier' />
                </div>
                <div className="choice-background">
                    <img src={choiceBg} alt="choice-background" />
                </div>
            </div>

        </div>
    )
}

export { Choices }