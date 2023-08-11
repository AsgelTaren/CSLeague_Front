import React from 'react';
import { Campaign } from '../../core';
import { Logo } from '../../components';
import { useNavigate } from 'react-router-dom';


// Css import
import './CampaignCard.css';

// Import assets
import * as Assets from '../../assets';

const CampaignCard = ({ campaign, selected = false, id = -1, index, total }) => {
    let navigate = useNavigate();

    const customClick = (index, total, myEvent) => {
        var clickedDiv = myEvent.target;
        const selectedCardParent = clickedDiv.closest('.selectedCard');
        const index2 = index - 6;
        if (selectedCardParent) {
            navigate('/prizes?id=' + index2);
        } else {
            setCurrent(index - 6, total);
        }
    };

    if (campaign)
        return (
            <div className={"campaign-card " + (selected ? "selectedCard" : "")} id={id} onClick={(myEvent) => { customClick(index, total, myEvent) }}>
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
    return (
        <div className="campaign-card" style={{ background: "rgb(180,180,180)" }}></div>
    )
}


class CampaignCardList extends React.Component {
    render() {
        let campaigns = this.props.campaigns;
        let total = campaigns.length;
        campaigns = [null, null, null, null, null, null, ...campaigns, null, null, null, null];
        return (
            <div id="campaign-card-list">
                <div className="campaign-card-list-button previous" onClick={() => carouselMove("previous", total)}>
                    <img src={Assets.previous} alt="previous" />
                </div>
                <div className="campaign-card-list-button next" onClick={() => carouselMove("next", total)}>
                    <img src={Assets.next} alt="next" />
                </div>
                <div id="campaign-card-list-inner">
                    {campaigns.map((campaign, index) => <CampaignCard campaign={campaign} key={index} id={"campaign-card-" + index} index={index} total={total} />)}
                </div>
                <div className='dots-container'>
                    {Array.from({ length: total }).map((_, index) => (
                        <div className='dot-button' onClick={() => { setCurrent(index, total) }}>
                            {/* <span className={currentItem === index ? 'dot active-dot' : 'dot'}></span> */}
                            <span className='dot'></span>
                        </div>
                    ))}
                </div>
            </div>)
    }

    componentDidMount() {
        carouselMove("previous")
    }
}
CampaignCardList.defaultProps = {
    campaigns: [
        new Campaign('TOSS', Assets.toss_img, 'rgb(255,0,0)', Assets.toss_logo, Assets.csfinance_logo),
        new Campaign('WEI', Assets.wei_img, 'rgb(255,0,0)', Assets.toss_logo, Assets.csfinance_logo),
        new Campaign('WEI', Assets.wei_img, 'rgb(255,0,0)', Assets.toss_logo, Assets.csfinance_logo),
        new Campaign('WEI', Assets.wei_img, 'rgb(255,0,0)', Assets.toss_logo, Assets.csfinance_logo),
        new Campaign('WEI', Assets.wei_img, 'rgb(255,0,0)', Assets.toss_logo, Assets.csfinance_logo),
        new Campaign('WEI', Assets.wei_img, 'rgb(255,0,0)', Assets.toss_logo, Assets.csfinance_logo),
    ]
}

var currentItem = 0;

const carouselMove = (dir, total) => {
    let pos = []
    var cards = Array.from(document.querySelectorAll("#campaign-card-list-inner > div"))
    let inner = document.getElementById("campaign-card-list-inner")
    cards.forEach(value => pos.push(value.offsetLeft))
    if (dir === "next") {
        currentItem++;
    } else {
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
        console.log(cards[i + 6])
        cards[i + 6].classList.remove("selectedCard")
    }
    cards[6 + currentItem].classList.add("selectedCard")
}

const setCurrent = (index, total) => {
    let pos = []
    var cards = Array.from(document.querySelectorAll("#campaign-card-list-inner > div"))
    // let inner = document.getElementById("campaign-card-list-inner")
    cards.forEach(value => pos.push(value.offsetLeft))

    currentItem = index;
    // console.log(currentItem, index);

    let container = document.getElementById("campaign-card-list")
    container.scroll({
        left: pos[currentItem + 6] - (container.offsetWidth / 3), top: 0, behavior: "smooth"
    })

    for (var i = 0; i < total; i++) {
        cards[i + 6].classList.remove("selectedCard")
    }
    cards[6 + currentItem].classList.add("selectedCard")
};

export { CampaignCard, CampaignCardList, carouselMove }