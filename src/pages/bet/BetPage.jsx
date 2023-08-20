import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import * as Components from '../../components';
import * as Assets from '../../assets';
import { getBet } from "../../core";

import './BetPage.css';


const BetPage = () => {
    const [searchParams] = useSearchParams();
    const [bet, setBet] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const navigate = useNavigate();

    // console.log(bet);

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
            <p>Ce pari n'est pas valide</p>
        </div>)
    }

    // Ceci permet d'obtenir les noms et les images correspondants aux choix du pari :
    const choices_names = bet.choice_name.split(",");
    const choices_backgrounds = bet.choice_background.split(",");

    let choices = [];
    for (let pas = 0; pas < choices_backgrounds.length; pas++) {
        let emptyList = [];
        let toConcatenate = emptyList.concat(choices_names[pas], Assets.choices_backgrounds_map[choices_backgrounds[pas]]);
        let newLength = choices.push(toConcatenate);
    };

    // console.log(choices);
    // console.log(choices[0]);
    // console.log(choices[0][0]);    

    // Ceci permet d'obtenir les noms et les images des prizes :
    const prizes_names = campaign.prize_name.split(",");
    const prizes_images = campaign.prize_icon.split(",");

    let prize_data = [];
    for (let i = 0; i < prizes_images.length; i++) {
        let emptyList = [];
        let toConcatenate = emptyList.concat(prizes_names[i], Assets.campaigns_prizes_map[prizes_images[i]]);
        prize_data.push(toConcatenate);
    }

    // console.log(prize_data);

    return (<div className="bet-page">

        <div className="bet-page-bouton-retour" onClick={() => { navigate('/campaign?id=' + campaign.id) }}>
            <Components.BoutonRetour />
        </div>

        <div className="campaign-image">
            <img src={bet.image} alt="campaign_image" />
        </div>
        <div className="bet-infos-container">

            <div className="bet-infos">
                <div className="bet-infos-title">
                    <img src={bet.icon} alt="icon" />
                    <p>{campaign.name + " : " + bet.name}</p>
                </div>
            </div>

            <div className="bet-desc">
                <p>{bet.desc}</p>
            </div>

            <div className="campaign-prizes">
                <div className="campaign-prizes-left">
                    <p>Organisé par :</p>
                    <div className="bet-page__logo-csleague">
                        <Components.Logo size="100%" />
                    </div>
                    <img src={campaign.partner_icon} alt="logo-partner" />
                </div>
                <div className="campaign-prizes-right">
                    <p>A gagner :</p>
                    {prize_data.map((prize, _) => (
                        <img src={prize[1]} alt="prize-image" />
                    ))}
                </div>
            </div>

            <h1 className="a-vos-marques">A vos marques, prêts, pariez !</h1>
        </div>

        <div className="choices-container">
            {choices.map((choice, index) => <Components.Choices choice_data={choice} key={index} />)}
        </div>

    </div>)
};

export { BetPage };