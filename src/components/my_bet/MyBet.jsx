import React from 'react';
import './MyBet.css';
import { getImageURL } from '../../utils/getImageURL';
import * as Components from '../';
import moment from 'moment';
import { placeBetForUserByID } from '../../core/Bet';

const MyBet = ({ userBet, cookies, navigate }) => {
    const today = new Date(Date.now())
    const date_end = moment(userBet.date_end, 'YYYY-MM-DD HH:mm:ss').toDate()
    return (
        <div className='mon-pari'>
            <div className='bet-image'>
                <img src={getImageURL(userBet.bet_image)} alt="bet-image" />
                <h1 className='mon-pari-evt-title'>{userBet.campaign_name}</h1>
                <div className='bet-image__campaign-logo'>
                    <img src={getImageURL(userBet.campaign_icon)} alt="campaign-logo" />
                </div>
            </div>
            <div className='bet-title'>{userBet.bet_name}</div>
            <div className='in-game'>
                <h2>Votre choix</h2>
                <h1>{userBet.choice}</h1>
            </div>
            <div className='bouton-annuler' >
                {date_end > today ?
                    <Components.ClassicButton text='Annuler' onClick={() => {
                        console.log(userBet.bet_id)
                        placeBetForUserByID(userBet.bet_id, cookies.get("user_token").access_token, undefined).then(data => console.log(data))
                        navigate(0)
                    }} /> : (userBet.bet_answer ? <p>Résultat: {Math.round(userBet.points_won * 100) / 100} points</p> : <p>Résultats bientôt disponibles</p>)}

            </div>

        </div>
    )
}

export { MyBet }