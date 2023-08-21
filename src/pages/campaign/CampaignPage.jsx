import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getCampaign } from '../../core';
import * as Components from '../../components';
import * as Assets from '../../assets';

import './CampaignPage.css';

const CampaignPage = () => {
    const [campaign, setCampaign] = useState();
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

    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas</p></div>)
    }

    return (<div className="campaign-page">

        <div className="campaign-page-bouton-retour" onClick={() => { navigate("/") }}>
            <Components.BoutonRetour />
        </div>

        <div className="campaign-image">
            <img src={campaign.image} alt="campaign_image" />
        </div>

        <div className="campaign-infos-container">
            <div className="campaign-infos">
                <div className="campaign-infos-title">
                    <img src={campaign.icon} alt="icon" />
                    <p>{campaign.name}</p>
                </div>
            </div>

            <div className="campaign-desc">
                <p>{campaign.desc}</p>
            </div>

            <div className="campaign-prizes">
                <div className="campaign-prizes-left">
                    <p>Organisé par :</p>
                    <div className="campaign-page__logo-csleague">
                        <Components.Logo size="100%" />
                    </div>
                    <img src={Assets.csfinance_logo} alt="logo-partner" />
                </div>
                <div className="campaign-prizes-right">
                    <p>A gagner :</p>
                    <img src={Assets.airpods} alt="airpods" />
                    <img src={Assets.macbookpro} alt="macbookpro" />
                    <img src={Assets.jblcharge} alt="jbgcharge" />
                </div>
            </div>

            <h1 className="a-vos-marques">A vos marques, prêts, pariez !</h1>
        </div>

        <div className="campaign-page-bets">
            {bets.map((bet, index) => <Components.BetCard bet={bet} key={index} />)}
        </div>
    </div>)
}

export { CampaignPage }