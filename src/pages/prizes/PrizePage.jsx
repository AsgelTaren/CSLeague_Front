import React from 'react';
import './PrizePage.css';
import * as Components from '../../components';
import * as Assets from '../../assets';
import { useNavigate } from 'react-router-dom';

const PrizePage = ({ partnerName, partnerLogo, prizeData }) => {
    let navigate = useNavigate()
    const firstThreePrizes = prizeData.slice(0, 3);
    return (
        <div className='betpage-container'>
            <div className='betpage-bouton-retour' onClick={() => { navigate('/') }}><Components.BoutonRetour /></div>
            <div className='betpage-header'>Profitez du WEI pour tenter de gagner des lots d’enfer !</div>
            <div className='betpage-partners'>
                <div className='partner-left'><Components.Logo size='8rem' /></div>
                <div className='partner-cross'><Components.CrossIcon /></div>
                <div className='partner-right'>
                    <p>{partnerName}</p>
                    <img src={partnerLogo} alt="csfinance" />
                </div>
            </div>
            <div className='betpage-prizes'>
                <div className='prizes-title'>A gagner :</div>

                <div className='prizes-container'>
                    {firstThreePrizes.map(item => (
                        <div className='prize' key={item.id}>
                            <img src={item.logo} alt={item.name} />
                            <p className='prize-name'>{item.name}</p>
                        </div>
                    ))}
                </div>

            </div>
            <Components.ClassicButton text='Parier' icon={<Components.BetIcon />} />
        </div>
    )
}

export { PrizePage }