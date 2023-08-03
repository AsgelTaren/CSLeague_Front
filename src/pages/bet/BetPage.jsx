import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import * as Components from '../../components';
import { bet_types } from "../../assets";
import { getBet } from "../../core";

import './BetPage.css';


const BetPage = () => {
    const [searchParams] = useSearchParams();
    const [bet, setBet] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (!searchParams.get("id")) return;
        getBet(searchParams.get("id")).then(bet => {
            setBet(bet);
            bet.getCampaign().then(campaign => {
                setCampaign(campaign)
            })
        })

    }, [searchParams])

    if (!bet || !campaign) {
        return (<div>
            <p>Ce paris n'est pas valide</p>
        </div>)
    }
    return (<div>
        <div className="campaign-image">
            <Components.BoutonRetour onClick={() => { navigate("/campaign?id=" + campaign.id) }} />
            <img src={bet.image} alt="campaign_image" />
        </div>
        <div className="campaign-infos-container">
            <div className="campaign-infos">
                <div className="campaign-infos-title">
                    <img src={bet.icon} alt="icon" />
                    <p>{campaign.name + " : " + bet.name}</p>
                </div>
            </div>
        </div>
    </div>)
};

export { BetPage };