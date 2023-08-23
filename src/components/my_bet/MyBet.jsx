import React from 'react';
import './MyBet.css';
import * as Assets from '../../assets';
import * as Components from '../';

const MyBet = ({ userBet, cookies, navigate }) => {
    const today = new Date(Date.now())
    console.log(userBet)
    return (
        <div className='mon-pari'>
            <div className='bet-image'>
                <img src={userBet.bet.image} alt="bet-image" />
                <h1 className='mon-pari-evt-title'>{userBet.campaign_name}</h1>
                <div className='bet-image__campaign-logo'>
                    <img src={userBet.bet.icon} alt="campaign-logo" />
                </div>
            </div>
            <div className='bet-title'>{userBet.bet.name}</div>
            <div className='in-game'>
                <h2>Votre choix</h2>
                <h1>{userBet.choice}</h1>
            </div>
            <div className='bouton-annuler' >
                {userBet.bet.date_end > today ?
                    <Components.ClassicButton text='Annuler' onClick={() => {
                        userBet.bet.placeBetForUser(cookies.get("user_token").access_token, undefined).then(data => console.log(data))
                        navigate(0)
                    }} /> : (userBet.bet.answer ? <p>Résultat: {userBet.points_won} points</p> : <p>Résultats bientôt disponibles</p>)}

            </div>

        </div>
    )
}

export { MyBet }