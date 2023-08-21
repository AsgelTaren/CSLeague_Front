import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import * as Components from '../../components';
import * as Assets from '../../assets';
import { getBet, getUserBet } from "../../core";
import Cookies from "universal-cookie";

import './BetPage.css';


const BetPage = () => {
    const [searchParams] = useSearchParams();
    const [bet, setBet] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const navigate = useNavigate();
    const [userBet, setUserBet] = useState(null);
    const cookies = new Cookies()

    useEffect(() => {
        if (!searchParams.get("id")) return;
        getBet(searchParams.get("id")).then(bet => {
            setBet(bet);
            bet.getCampaign().then(campaign => {
                setCampaign(campaign)
            })
        })
        if (!cookies.get("user_token")) return;
        getUserBet(cookies.get("user_token").access_token, searchParams.get("id")).then(data => console.log(data))

    }, [searchParams])

    if (!bet || !campaign) {
        return (<div>
            <p>Ce pari n'est pas valide</p>
        </div>)
    }

    // Ceci permet d'obtenir les noms et les images correspondants aux choix du pari :
    const choices_names = bet.choice_name.split(",");
    const choices_backgrounds = bet.choice_background.split(",");

    let choices = choices_names.map((value, index) => ({ name: value, background: Assets.choices_backgrounds_map[choices_backgrounds[index]] }))

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
                <p>{campaign.desc}</p>
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
                    {prize_data.map((prize, index) => (
                        <img src={prize[1]} alt="prize-image" key={index} />
                    ))}
                </div>
            </div>

            <h1 className="a-vos-marques">A vos marques, prêts, pariez !</h1>
        </div>

        <div className="choices-container">
            {choices.map((choice, index) => <Components.Choices choice={choice} key={index} />)}
        </div>

        {/* <Components.Number /> */}

        <div className="bet-page__order-container">
            {/*orderList.map((item) => <Components.Order text={item} />) */}
        </div>

    </div>)
};

export { BetPage };