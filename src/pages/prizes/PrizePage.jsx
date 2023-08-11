import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getCampaign } from '../../core';
import * as Components from '../../components';
import * as Assets from '../../assets';
import { campaigns_prizes_map } from '../../assets';

import './PrizePage.css';

const PrizePage = ({ partnerName, partnerLogo, prizeData }) => {
    const firstThreePrizes = prizeData.slice(0, 3);

    const [campaign, setCampaign] = useState()
    const [bets, setBets] = useState([]);
    
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();   
    
    useEffect(() => {
        if (!searchParams.get("id")) return;
        getCampaign(searchParams.get("id")).then(campaign => {
            setCampaign(campaign);
            campaign.getBets().then(bets => setBets(bets))
        })
        
    }, [searchParams])

    console.log(campaign);

    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas</p></div>)
    }

    console.log(campaign.prize_name, campaign.prize_icon)
    const prizes_names = campaign.prize_name.split(",");
    const prizes_images = campaign.prize_icon.split(",");

    let prize_data = [];
    for (let i = 0; i < prizes_images.length; i++) {
        let emptyList = [];
        let toConcatenate = emptyList.concat(prizes_names[i], campaigns_prizes_map[prizes_images[i]]);
        // console.log(toConcatenate);
        let newLength = prize_data.push(toConcatenate);
    }

    console.log(prize_data);

    

    return (
        <div className='betpage-container'>
            <div className='betpage-bouton-retour' onClick={() => { navigate('/') }}><Components.BoutonRetour /></div>
            <div className='betpage-header'>Profitez du WEI pour tenter de gagner des lots d’enfer !</div>
            <div className='betpage-partners'>
                <div className='partner-left'>
                    <Components.Logo size='8rem' />
                    <p>CS League</p>
                </div>
                <div className='partner-cross'><Components.CrossIcon /></div>
                <div className='partner-right'>
                    <p>{campaign.partner_name}</p>
                    <img src={campaign.partner_icon} alt="partner-icon" />
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
            <div className='prizepage-bouton-parier' >
                <Components.ClassicButton text='Parier' icon={<Components.BetIcon />} />
            </div>
        </div>
    )
}

export { PrizePage }