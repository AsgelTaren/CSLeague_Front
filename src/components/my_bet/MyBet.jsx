import React from 'react';
import './MyBet.css';
import * as Assets from '../../assets';
import * as Components from '../';

const MyBet = () => {
    return (
        <div className='mon-pari'>
            {/* <div className='bet-image-container'>
            </div> */}
            <div className='bet-image mon-pari-container'>
                <img src={Assets.CampaignImages.wei} alt="bet-image" />
                <h1 className='mon-pari-evt-title'>WEI</h1>
            </div>
            <div className='bet-title mon-pari-container'>Qui sera l'artiste du WEI ?</div>
            <div className='in-game mon-pari-container'>
                <h2>En jeu :</h2>
                <h1>100 BuCS</h1>
            </div>
            <div className='bouton-annuler mon-pari-container'>
                <Components.ClassicButton text='Annuler' />
            </div>
        </div>
    )
}

export { MyBet }