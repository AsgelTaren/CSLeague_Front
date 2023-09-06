import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getUniqueCampaign } from '../../core';
import * as Components from '../../components';

import './PrizePage.css';
import { getImageURL } from "../../utils/getImageURL";

const PrizePage = () => {

    const [campaign, setCampaign] = useState()

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchParams.get("id")) return;
        getUniqueCampaign(searchParams.get("id")).then(campaign => {
            setCampaign(campaign);
        })

    }, [searchParams])

    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas</p></div>)
    }

    const campaignIndex = campaign.id;

    if (!campaign.prizes || campaign.prizes.length === 0) {
        navigate('/campaign?id=' + campaignIndex)
    }

    return (
        <div className='betpage-container'>
            <div className='betpage-bouton-retour' onClick={() => { navigate('/') }}><Components.BoutonRetour /></div>
            <div className='betpage-header'>Profitez du WEI pour tenter de gagner des lots d’enfer !</div>
            <div className='betpage-partners'>
                {campaign.partners.map((partner, index) => <React.Fragment key={index}><div className='partner-right'>
                    <img src={getImageURL(partner.icon)} alt={partner.icon} />
                    <p>{partner.name}</p>
                </div>
                    {index !== campaign.partners.length - 1 ? <div className='partner-cross'><Components.CrossIcon size='100%' /></div> : null}
                </React.Fragment>
                )}
            </div>
            <div className='betpage-prizes'>
                <div className='prizes-title'>A gagner :</div>

                <div className="prizes-container">
                    {campaign.prizes.map((prize, index) => (
                        <div className="prize" key={index}>
                            <img src={getImageURL(prize.image)} alt="prize-image_icon" />
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