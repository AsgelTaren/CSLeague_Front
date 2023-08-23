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


    console.log(window.screen.width);



    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas</p></div>)
    }
    
    // Ceci permet d'obtenir les noms et les images des prizes :
    const prizes_names = campaign.prize_name.split(",");
    const prizes_images = campaign.prize_icon.split(",");

    let prize_data = prizes_names.map((value, index) => ({ name: value, background: Assets.campaigns_prizes_map[prizes_images[index]] }));


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
                    <img src={campaign.partner_icon} alt="logo-partner" />
                </div>
                <div className="campaign-prizes-right">
                    <p>A gagner :</p>
                    {prize_data.map((prize, index) => (
                        <img src={prize.background} alt="prize-background" key={index} />
                    ))}
                </div>
            </div>

            <h1 className="a-vos-marques">A vos marques, prêts, pariez !</h1>
        </div>

        <div className="campaign-page-bets">
            {betRow.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }} className="campaign-page-bets-row">
                    {row.map((bet, index) => (
                        <Components.BetCard bet={bet} key={index} />
                    ))}
                </div>
            ))}
        </div>

    </div>)
}

export { CampaignPage }