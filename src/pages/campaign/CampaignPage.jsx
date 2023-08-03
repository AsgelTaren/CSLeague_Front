import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getCampaign } from '../../core';
import * as Components from '../../components';

import './CampaignPage.css';

const CampaignPage = () => {
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


    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas du tout</p></div>)
    }

    return (<div className="campaign-page">

        <div className="campaign-image">
            <Components.BoutonRetour onClick={() => { navigate("/") }} />
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
        </div>

        <div className="campaign-page-bets">
            {bets.map((bet, index) => <Components.BetCard bet={bet} key={index} />)}
        </div>
    </div>)
}

export { CampaignPage }