import React from 'react';
import { Campaign } from '../../core';

// Css import
import './CampaignCard.css';

// Import assets
import * as Assets from '../../assets';

const CampaignCard = ({ campaign = new Campaign('Test campaign', Assets.campaign_test, 'rgb(255,0,0)') }) => {
    return (
        <div className='campaign-card'>
            <div className='campaign-card-background'>
                <img src={Assets.campaign_test} alt='background' />
            </div>
        </div>
    )
}

const CampaignCardList = ({ campaigns = [new Campaign('Test campaign', undefined, 'rgb(255,0,0)')] }) => {
    return (
        <div className='campaign-card-list'>
            {campaigns.map(campaign => <CampaignCard campaign={campaign} />)}
        </div>
    )
}

export { CampaignCard, CampaignCardList }