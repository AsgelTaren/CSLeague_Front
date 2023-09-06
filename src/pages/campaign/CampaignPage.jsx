import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getUniqueCampaign, getBetsOfCampaign } from '../../core';
import { getImageURL } from "../../utils/getImageURL";
import * as Components from '../../components';

import './CampaignPage.css';

const CampaignPage = () => {
    const [campaign, setCampaign] = useState();
    const [bets, setBets] = useState([]);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (!searchParams.get("id")) return;
        getUniqueCampaign(searchParams.get("id")).then(campaign => setCampaign(campaign))
        getBetsOfCampaign(searchParams.get("id")).then(bets => setBets(bets))
    }, [searchParams])


    var cardsPerRow = 4;
    // En fonction de la largeur de l'écran on définit le nombre de BetCard maximal affichés par ligne.
    if (window.screen.width > 1024) {
        cardsPerRow = 4;
    } else if (window.screen.width > 768) {
        cardsPerRow = 3;
    } else if (window.screen.width > 425) {
        cardsPerRow = 2;
    } else {
        cardsPerRow = 1;
    }

    const betRow = [];
    for (let i = 0; i < bets.length; i += cardsPerRow) {
        betRow.push(bets.slice(i, i + cardsPerRow));
    };

    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas</p></div>)
    }

    return (<div className="campaign-page">

        <div className="campaign-page-bouton-retour" onClick={() => { navigate("/") }}>
            <Components.BoutonRetour />
        </div>

        <div className="campaign-image">
            <img src={getImageURL(campaign.image)} alt="campaign_image" />
        </div>

        <div className="campaign-infos-container">
            <div className="campaign-infos">
                <div className="campaign-infos-title">
                    <img src={getImageURL(campaign.icon)} alt="icon" />
                    <p>{campaign.name}</p>
                </div>
            </div>

            <div className="campaign-desc">
                <p>{campaign.desc}</p>
            </div>

            <div className="campaign-prizes">
                <div className="campaign-prizes-left">
                    <p>Organisé par :</p>
                    {campaign.partners.map((partner, index) =>
                        <img src={getImageURL(partner.icon)} alt="logo-partner" key={index} />
                    )}

                </div>
                <div className="campaign-prizes-right">
                    <p>A gagner :</p>
                    {campaign.prizes.map((prize, index) => (
                        <img src={getImageURL(prize.image)} alt="prize-background" key={index} />
                    ))}
                </div>
            </div>

            <h1 className="a-vos-marques">{bets.length > 0 ? "A vos marques, prêts, pariez !" : "Aucun paris n'est disponible pour l'instant"}</h1>
        </div>

        <div className="campaign-page-bets">
            {betRow.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }} className="campaign-page-bets-row">
                    {row.map((bet, index) => (
                        <Components.BetCard bet={bet} key={index} campaign_icon={getImageURL(campaign.icon)} />
                    ))}
                </div>
            ))}
        </div>

    </div>)
}

export { CampaignPage }