import React from 'react';
import './MyBet.css';
import * as Assets from '../../assets';
import * as Components from '../';

const MyBet = () => {
    return (
        <div className='mon-pari'>
            {/* <div className='bet-image-container'>
            </div> */}
            <div className='bet-image test'>
                <img src={Assets.CampaignImages.wei} alt="bet-image" />
                <h1 className='mon-pari-evt-title'>WEI</h1>
                <div className='bet-image__campaign-logo'>
                    <img src={Assets.CampaignIcons.toss} alt="campaign-logo" />
                </div>
            </div>
            <div className='bet-title test'>Qui sera l'artiste du WEI ?</div>
            <div className='in-game test'>
                <h2>En jeu :</h2>
                <h1>100 BuCS</h1>
            </div>
            <div className='bouton-annuler test'>
                <Components.ClassicButton text='Annuler' />
            </div>
        </div>
    )
}

export { MyBet }