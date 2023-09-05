import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getUniqueCampaign } from '../../core';
import * as Components from '../../components';

import './PrizePage.css';
import { getImageURL } from "../../utils/getImageURL";

const PrizePage = () => {

    const [campaign, setCampaign] = useState()
    const [bets, setBets] = useState([]);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchParams.get("id")) return;
        getUniqueCampaign(searchParams.get("id")).then(campaign => {
            setCampaign(campaign);
            console.log(campaign)
        })

    }, [searchParams])

    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas</p></div>)
    }

    if (!campaign.prizes) {
        return (<div><p>Cette campagne n'a pas de prix!</p></div>)
    }

    const campaignIndex = campaign.id;

    return (
        <div className='betpage-container'>
            <div className='betpage-bouton-retour' onClick={() => { navigate('/') }}><Components.BoutonRetour /></div>
            <div className='betpage-header'>Profitez du WEI pour tenter de gagner des lots d’enfer !</div>
            <div className='betpage-partners'>
                {/* <div className='partner-left'>
                    <div className="partner-left__csleague-logo">
                        <Components.Logo size='100%' />
                    </div>
                    <p>CS League</p>
                </div>
                <div className='partner-cross'><Components.CrossIcon size='100%' /></div>
                <div className='partner-right'>
                    <p>{campaign.partner_name}</p>
                    <img src={campaign.partner_icon} alt="partner-icon" />
                </div> */}

                {campaign.partners.map((partner, index) => <React.Fragment><div className='partner-right'>
                    <img src={getImageURL(partner.icon)} alt={partner.icon} />
                    <p>{partner.name}</p>
                </div>
                    {index != campaign.partners.length - 1 ? <div className='partner-cross'><Components.CrossIcon size='100%' /></div> : null}
                </React.Fragment>
                )}
            </div>
            <div className='betpage-prizes'>
                <div className='prizes-title'>A gagner :</div>

                <div className="prizes-container">
                    {campaign.prizes.map((prize, index) => (
                        <div className="prize" key={index}>
                            <img src={getImageURL(prize.image)} alt="prize-image" />
                            <p className="prize-name">{prize.name}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className='prizepage-bouton-parier' onClick={() => { navigate('/campaign?id=' + campaignIndex) }}>
                <Components.ClassicButton text='Parier' icon={<Components.BetIcon />} />
            </div>
        </div>
    )
}

export { PrizePage }