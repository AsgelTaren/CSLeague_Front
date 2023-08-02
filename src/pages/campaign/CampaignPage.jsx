import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Campaign, Bet, betOfString } from '../../core';
import * as CampaignImages from '../../assets/campaigns/images_campaigns';
import * as CampaignIcons from '../../assets/campaigns/icons_campaigns';
import * as Components from '../../components';
import axios from "axios";

import './CampaignPage.css';

const campaigns_icons = { toss: CampaignIcons.toss };
const campaigns_images = { toss: CampaignImages.toss, wei: CampaignImages.wei };

const CampaignPage = () => {
    const [campaign, setCampaign] = useState()
    const [searchParams] = useSearchParams();
    const [bets, setBets] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (searchParams.get("id"))
            axios.get("http://localhost:8000/api/services/campaigns/getOne?id=" + searchParams.get("id")).then(data => data.data).then(data => {
                if (data.status === "success") {
                    setCampaign(new Campaign(data.data.id, data.data.name, campaigns_images[data.data.image], campaigns_icons[data.data.icon], data.data.desc))

                    axios.get("http://localhost:8000/api/services/bets/getOfCampaign?id=" + searchParams.get("id")).then(data => data.data).then(data => {
                        setBets(data.data.map(value => betOfString(value)))
                    })
                }
            })
    }, [searchParams])
    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas du tout</p></div>)
    }
    return (<div className="campaign-page">
        <div className="campaign-image">
            <Components.BoutonRetour onClick={() => { navigate("/") }} />
            <img src={campaign.image} alt="campaign image" />
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
            {bets.map((bet, index) => <Components.BetCard bet={bet} key={index}
                campaigns_icons={campaigns_icons}
                campaigns_images={campaigns_images}
                campaign={campaign} />)}
        </div>
    </div>)
}

export { CampaignPage, campaigns_icons, campaigns_images }