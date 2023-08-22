import React from 'react';
import './MyBet.css';
import * as Assets from '../../assets';
import * as Components from '../';

const MyBet = ({ userBet, cookies, navigate }) => {
    return (
        <div className='mon-pari'>
            {/* <div className='bet-image-container'>
            </div> */}
            <div className='bet-image mon-pari-container'>
                <img src={userBet.bet.image} alt="bet-image" />
                <h1 className='mon-pari-evt-title'>{userBet.campaign_name}</h1>
                <div className='bet-image__campaign-logo'>
                    <img src={userBet.bet.icon} alt="campaign-logo" />
                </div>
            </div>
            <div className='bet-title mon-pari-container'>{userBet.bet.name}</div>
            <div className='in-game mon-pari-container'>
                <h2>Votre choix</h2>
                <h1>{userBet.choice}</h1>
            </div>
            <div className='bouton-annuler mon-pari-container'>
                <Components.ClassicButton text='Annuler' onClick={() => {
                    userBet.bet.placeBetForUser(cookies.get("user_token").access_token, undefined);
                    navigate(0)
                }} />
            </div>
        </div>
    )
}

export { MyBet }