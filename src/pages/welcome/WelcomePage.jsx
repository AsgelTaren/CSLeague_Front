import React, { useState, useEffect } from 'react';
import { Logo } from '../../components';
import axios from 'axios';

import './WelcomePage.css';
import * as Components from '../../components';
import { Campaign } from '../../core';
import { campaigns_icons, campaigns_images } from '../campaign/CampaignPage';

const WelcomePage = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/services/campaigns/getAll").then(data => data.data).then(data => {
            if (data.status === "success") {
                setCampaigns(data.data.map(item =>
                    new Campaign(item.id, item.name, campaigns_images[item.image], campaigns_icons[item.icon])))
            } else {

            }
        })
    }, [])
    return (<div className="welcome-page">
        <div className="welcome-page-main">
            <div className='header'>
                <h1>Bienvenue sur CS League !</h1>
                <p>Parie gratuitement dès maintenant sur les évènements les plus chauds de CS et deviens une légende en gagnant des lots incroyables !</p>
            </div>
        </div>

        <div className="welcome-page-news">
            <div className="welcome-page-titled-separator">
                <p>A la une</p>
            </div>
            <Components.CampaignCardList campaigns={campaigns} />
        </div>

    </div>)
};

export { WelcomePage };