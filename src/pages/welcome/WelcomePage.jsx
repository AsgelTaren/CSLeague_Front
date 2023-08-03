import React, { useState, useEffect } from 'react';
import { Logo } from '../../components';
import axios from 'axios';

import './WelcomePage.css';
import * as Components from '../../components';
import { getAllCampaigns } from '../../core';

const WelcomePage = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        getAllCampaigns().then(campaigns => setCampaigns(campaigns))
    }, [])
    return (<div className="welcome-page">
        <div className='navbar-container'>
            <Components.NavBar />
        </div>
        <div className="welcome-page-main">
            <div className='header'>
                <h1>Bienvenue sur CS League !</h1>
                <p>Parie gratuitement dès maintenant sur les évènements les plus chauds de CS et deviens une légende en gagnant des lots incroyables !</p>
            </div>
        </div>

        <div className="welcome-page-news">
            <div className="welcome-page-titled-separator">
                <p>A la une :</p>
            </div>
            <Components.CampaignCardList campaigns={campaigns} />
        </div>

        <Components.Footer />

    </div>)
};

export { WelcomePage };