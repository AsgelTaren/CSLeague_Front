import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing all pages
import * as Pages from './pages';
// Importing all components
import * as Components from './components';

import './App.css';

import * as Assets from './assets';

// Main code of the website
const App = () => {
    return (<div>
        <BrowserRouter>
            {/* <Components.NavBar /> */}
            <Routes>
                <Route path="/" element={<Pages.WelcomePage />} />
                <Route path="/campaign" element={<Pages.CampaignPage />} />
                <Route path="/bet" element={<Pages.BetPage />} />
                <Route path="/oauth" element={<Pages.AuthPage />} />
                <Route path="/oauth/error" element={<p>Une erreur est survenue!</p>} />
                <Route path="*" element={<p>Cette page n'existe pas!</p>} />
                <Route path="/contact" element={<Pages.ContactPage />} />
                {/* <Route path="/prizes" element={<Pages.PrizePage />} /> */}
                <Route path="/prizes" element={<Pages.PrizePage
                    partnerName="CS Finance"
                    partnerLogo={Assets.csfinance_logo}
                    prizeData={[
                        { id: 0, logo: Assets.airpods, name: 'AirPods' },
                        { id: 1, logo: Assets.macbookpro, name: 'MacBook Pro' },
                        { id: 2, logo: Assets.jblcharge, name: 'JBL Charge 5' },
                    ]}
                />} />
            </Routes>
        </BrowserRouter>
    </div>)

};

export default App;