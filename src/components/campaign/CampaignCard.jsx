import React, { useEffect } from 'react';
import { Campaign } from '../../core';
import { useNavigate } from "react-router-dom";

// Css import
import './CampaignCard.css';

// Import assets
import * as Assets from '../../assets';

const CampaignCard = ({ campaign, selected }) => {
    const navigate = useNavigate()
    if (campaign)
        return (
            <div className={"campaign-card " + (selected ? "selectedCard" : "")} onClick={() => { navigate("/campaign?id=" + campaign.id) }}>
                <div className='campaign-card-background'>
                    <img src={campaign.image} alt='background' />
                </div>
                <div className='campaign-card-content'>
                    <img className='campaign-card-logo' src={campaign.icon} alt="icon" />
                    <div className='campaign-card-infos'>
                        <div className='campaign-card-name'>
                            <p>{campaign.name}</p>
                        </div>
                        <p className="campaign-card-date">du 11 au 18 mai 2023</p>
                    </div>
                </div>
            </div>
        )
    return (<div className="campaign-card" style={{ background: "rgb(180,180,180)" }}>

    </div>)
}


class CampaignCardList extends React.Component {
    render() {
        let campaigns = this.props.campaigns;
        let total = campaigns.length;
        campaigns = [null, null, null, null, null, null, ...campaigns, null, null, null, null]
        return (
            <div className="campaign-card-list-container">
                <div id="campaign-card-list">
                    <div id="campaign-card-list-inner">
                        {campaigns.map((campaign, index) => <CampaignCard campaign={campaign} key={index} selected={index === 7} />)}
                    </div>
                </div>
                <div className="campaign-card-list-button previous" onClick={() => carouselMove("previous", total)}><img src={Assets.previous} alt="previous" /></div>
                <div className="campaign-card-list-button next" onClick={() => carouselMove("next", total)}><img src={Assets.next} alt="next" /></div>
            </div>)
    }
}
CampaignCardList.defaultProps = {
    campaigns: []
}

var currentItem = 0;

const carouselMove = (dir, total) => {
    let pos = []
    var cards = Array.from(document.querySelectorAll("#campaign-card-list-inner > div"))
    cards.forEach(value => pos.push(value.offsetLeft))
    if (dir === "next") {
        currentItem++;
    }
    if (dir === "previous") {
        currentItem--;
    }
    if (currentItem < 0) {
        currentItem = 0;
    }
    if (currentItem >= total) {
        currentItem = total - 1;
    }
    let container = document.getElementById("campaign-card-list")
    container.scroll({
        left: pos[currentItem + 6] - (container.offsetWidth / 3), top: 0, behavior: "smooth"
    })

    for (var i = 0; i < total; i++) {
        cards[i + 6].classList.remove("selectedCard")
    }
    console.log(currentItem)
    console.log(cards[currentItem + 6])
    cards[6 + currentItem].classList.add("selectedCard")
}

export { CampaignCard, CampaignCardList, carouselMove }