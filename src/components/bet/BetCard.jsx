import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getImageURL } from "../../utils/getImageURL";
import { bet_types_images, bet_types_names } from '../../assets';

import './BetCard.css';

const BetCard = ({ bet, campaign_icon }) => {
    const navigate = useNavigate();
    return (<div className="bet-card" onClick={() => navigate("/bet?id=" + bet.id)}>
        <div className="bet-card-background">
            <img src={getImageURL(bet.image)} alt="bet_image" />
        </div>
        <div className="bet-card-content">
            <img src={campaign_icon} alt="campaign_icon" />
            <p className="bet-card-title">{bet.name}</p>
            <div className="bet-card-separator"></div>
            <p className="bet-card-date">Du {moment(bet.date_begin).format("DD/MM/YYYY - hh:mm")}</p>
            <p className="bet-card-date">Au {moment(bet.date_end).format("DD/MM/YYYY - hh:mm")}</p>
            <p className="bet-card-date">{bet.gains + " points"}</p>
            <div className="bet-card-type">
                <img src={bet_types_images[bet.bet_type]} alt="bet-type" />
                <p>{bet_types_names[bet.bet_type]}</p>
            </div>

        </div>

    </div>)
}

export { BetCard }