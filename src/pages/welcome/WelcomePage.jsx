import React from 'react';
import { Logo } from '../../components';

import './WelcomePage.css';
import * as Components from '../../components';

const WelcomePage = () => {
    return (<div className="welcome-page">
        <div className="welcome-page-main">
            <div className='header'>
                <h1>Bienvenue sur CS League !</h1>
                <p>Parie gratuitement dès maintenant sur les évènements les plus chauds de CS et deviens une légende en gagnant des lots incroyables !</p>
            </div>
        </div>

        <div className="welcome-page-news">
            <Components.CampaignCardList />
        </div>

    </div>)
};

export { WelcomePage };