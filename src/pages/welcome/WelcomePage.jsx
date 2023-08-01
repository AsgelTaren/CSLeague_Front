import React from 'react';
import { Logo } from '../../components';

import './WelcomePage.css';
import * as Components from '../../components';

const WelcomePage = () => {
    return (<div className="welcome-page">
        <div className="welcome-page-main">
            <Logo />
            <div className="welcome-page-main-name">
                <p>CS League</p>
            </div>
            <Components.ClassicButton text={"Commencer à jouer"} icon={<Components.BetIcon />} />
        </div>

        <div className="welcome-page-news">
            <Components.CampaignCardList />
        </div>

    </div>)
};

export { WelcomePage };