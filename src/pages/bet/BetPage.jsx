import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import * as Components from '../../components';
import { getBet, getUserBet } from "../../core";
import Cookies from "universal-cookie";

import './BetPage.css';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const MultipleChoiceBet = (bet, userBet, cookies, navigate) => {
    if (userBet) {
        return (<p className="pari-pris">{userBet.choice}</p>)
    }
    const choices_names = bet.choice_name.split(",");
    const choices_backgrounds = bet.choice_background.split(",");

    let choices = choices_names.map((value, index) => ({ name: value, background: "test" }))
    return (
        <div className="choices-container">
            {choices.map((choice, index) => <Components.Choices choice={choice} key={index} onClick={() => {
                bet.placeBetForUser(cookies.get("user_token").access_token, cookies.get("user_token").provider, choice.name).then(data => {
                    navigate(0)
                })
            }} />)}
        </div>)
}

const NumberBet = (bet, userBet, cookies, navigate) => {
    if (userBet) {
        return (<p className="pari-pris">{userBet.choice}</p>)
    }

    return (<div className="number-container">
        <input type="number" id="choice-number" />
        <Components.ClassicButton text="Parier" icon={<Components.BetIcon />} onClick={(event) => {
            if (!!document.getElementById("choice-number").value && isNumeric(document.getElementById("choice-number").value)) {
                bet.placeBetForUser(cookies.get("user_token").access_token, cookies.get("user_token").provider, document.getElementById("choice-number").value).then(data => {
                    navigate(0)
                })
            }
        }} />
    </div>)


}

const bet_type_constructors = { "multiple": MultipleChoiceBet, "number": NumberBet }

const ManageDate = ({ bet, userBet, cookies, navigate }) => {
    const today = new Date(Date.now());
    if (today < bet.date_begin) {
        return (<p className="pari-pris">Ce pari n'a pas encore commencé !</p>)
    }
    if (today > bet.date_end) {
        return (<div>
            <p className="pari-pris"> Ce pari est clos !</p>
            {bet.answer ? <p className="pari-pris">La bonne réponse était {bet.answer}.</p> : <p className="pari-pris">Les résultats ne sont pas encore disponibles !</p>}
        </div>)
    }
    if (!cookies.get("user_token")) {
        return (<div className="bet-connect">
            <p>Vous devez vous connecter pour pouvoir parier !</p>
            <Components.ClassicButton text="Se connecter" onClick={() => navigate("/oauth")} />
        </div>)
    }
    return (<div className="manage-date-container">
        <h1 className="a-vos-marques">{userBet ? "Vous avez parié sur" : "A vos marques, prêts, pariez !"}</h1>
        <div className="user-choice">
            {bet_type_constructors[bet.bet_type](bet, userBet, cookies, navigate)}
        </div>
        {userBet ? <div className="bet-cancel">
            <Components.ClassicButton text="Annuler"
                onClick={() => {
                    bet.placeBetForUser(cookies.get("user_token").access_token,cookies.get("user_token").provider, undefined);
                    navigate(0)
                }} />
        </div> : null}
    </div>)
}

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
        getUserBet(cookies.get("user_token").access_token, cookies.get("user_token").provider,searchParams.get("id")).then(data => setUserBet(data))
    }, [searchParams])

    if (!bet || !campaign) {
        return (<div>
            <p>Ce pari n'est pas valide</p>
        </div>)
    }

    // Ceci permet d'obtenir les noms et les images des prizes :
    const prizes_names = campaign.prize_name.split(",");
    const prizes_images = campaign.prize_icon.split(",");

    let prize_data = prizes_names.map((value, index) => ({ name: value, background: "test" }));

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
                    <img src={bet.icon} alt="icon_bet" />
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
                        <img src={prize.background} alt="prize-background" key={index} />
                    ))}
                </div>
            </div>
            <ManageDate bet={bet} userBet={userBet} cookies={cookies} navigate={navigate} />
        </div>

        {/* <Components.Number /> */}

        <div className="bet-page__order-container">
            {/*orderList.map((item) => <Components.Order text={item} />) */}
        </div>

    </div>)
};

export { BetPage };