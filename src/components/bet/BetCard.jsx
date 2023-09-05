import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
// import moment from "moment";
import { Bet } from '../../core';

import './BetCard.css';

const BetCard = ({ bet }) => {
    const navigate = useNavigate();
    return (<div className="bet-card" onClick={() => navigate("/bet?id=" + bet.id)}>
        <div className="bet-card-background">
            <img src={bet.image} alt="bet_image" />
        </div>
        <div className="bet-card-content">
            <img src={bet.icon} alt="campaign_icon" />
            <p className="bet-card-title">{bet.name}</p>
            <div className="bet-card-separator"></div>
            <p className="bet-card-date">Du {moment(bet.date_begin).format("DD/MM/YYYY - hh:mm")}</p>
            <p className="bet-card-date">Au {moment(bet.date_end).format("DD/MM/YYYY - hh:mm")}</p>
            <p className="bet-card-date">{bet.gains + " points"}</p>
            <div className="bet-card-type">
                <img src={"test"} alt="bet-type" />
                <p>{"test"}</p>
            </div>

        </div>

    </div>)
}

export { BetCard }