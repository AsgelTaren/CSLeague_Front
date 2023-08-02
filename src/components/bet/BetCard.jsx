import React from "react";
import moment from "moment";
import { Bet } from '../../core';

import './BetCard.css';

const BetCard = ({ bet, campaigns_icons, campaigns_images, campaign }) => {
    return (<div className="bet-card">
        <div className="bet-card-background">
            <img src={campaigns_images[bet.image]} alt="bet image" />
        </div>
        <div className="bet-card-content">
            <img src={campaign.icon} alt="campaign icon" />
            <p className="bet-card-title">{bet.name}</p>
            <div className="bet-card-separator"></div>
            <p className="bet-card-date">Du {moment(bet.date_begin).format("DD/MM/YYYY - hh:mm")}</p>
            <p className="bet-card-date">Au {moment(bet.date_end).format("DD/MM/YYYY - hh:mm")}</p>
            <p>Paris à choix multiples</p>
        </div>

    </div>)
}

export { BetCard }