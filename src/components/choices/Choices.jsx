import React from 'react';
import './Choices.css';
import * as Assets from '../../assets';
import * as Components from '../../components';

const Choices = () => {
    return (
        <div className='choices-container'>
            {/* {choices.map((choice, index) => <Components.BetChoice choice={choice} key={index} />)} */}
            <div className="choice choice-1">
                <p>PLK</p>
                <div className='container-bouton-parier'>
                    <Components.ClassicButton text='Parier' />
                </div>
                <div className="choice-background">
                    <img src={Assets.plk} alt="choice-1" />
                </div>
            </div>
            <div className="choice choice-2">
                <p>SCH</p>
                <div className='container-bouton-parier'>
                    <Components.ClassicButton text='Parier' />
                </div>
                <div className="choice-background">
                    <img src={Assets.sch} alt="choice-2" />
                </div>
            </div>
            <div className="choice choice-3">
                <p>Johnny</p>
                <div className='container-bouton-parier'>
                    <Components.ClassicButton text='Parier' />
                </div>
                <div className="choice-background">
                    <img src={Assets.johnny} alt="choice-3" />
                </div>
            </div>
            <div className="choice choice-4">
                <p>Eminem</p>
                <div className='container-bouton-parier'>
                    <Components.ClassicButton text='Parier' />
                </div>
                <div className="choice-background">
                    <img src={Assets.eminem} alt="choice-4" />
                </div>
            </div>
        </div>
    )
}

export { Choices }