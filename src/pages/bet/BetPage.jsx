import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import * as Components from '../../components';
import * as Assets from '../../assets';
import { bet_types } from "../../assets";
import { getBet } from "../../core";
import { choices_backgrounds_map } from '../../assets';

import './BetPage.css';


const BetPage = () => {
    const [searchParams] = useSearchParams();
    const [bet, setBet] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const navigate = useNavigate();

    console.log(bet);

    useEffect(() => {
        if (!searchParams.get("id")) return;
        getBet(searchParams.get("id")).then(bet => {
            setBet(bet);
            bet.getCampaign().then(campaign => {
                setCampaign(campaign)
            })
        })

    }, [searchParams])

    const choices_names = bet.choice_name.split(",");
    const choices_backgrounds = bet.choice_background.split(",");

    let choices = [];
    for (let pas = 0; pas < choices_backgrounds.length; pas++) {
        let emptyList = [];
        let toConcatenate = emptyList.concat(choices_names[pas], choices_backgrounds_map[choices_backgrounds[pas]]);
        console.log(toConcatenate);
        let newLength = choices.push(toConcatenate);
    };

    // console.log(choices);

    if (!bet || !campaign) {
        return (<div>
            <p>Ce pari n'est pas valide</p>
        </div>)
    }
    return (<div className="bet-page">

        <div className="bet-page-bouton-retour" onClick={() => { navigate('/campaign?id=' + campaign['id']) }}>
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
                    <Components.Logo size="4rem" />
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

        <div className="choices-container">
            {choices.map((choice, index) => <Components.Choices choice_data={choice} key={index} />)}
        </div>

    </div>)
};

export { BetPage };