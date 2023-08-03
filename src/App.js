import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing all pages
import * as Pages from './pages';
// Importing all components
import * as Components from './components';

import './App.css';

// Main code of the website
const App = () => {
    return (<div>
        <BrowserRouter>
            <Components.NavBar />
            <Routes>
                <Route path="/" element={<Pages.WelcomePage />} />
                <Route path="/oauth" element={<Pages.AuthPage />} />
                <Route path="/oauth/error" element={<p>Une erreur est survenue!</p>} />
                <Route path="/campaign" element={<Pages.CampaignPage />} />
                <Route path="/bet" element={<Pages.BetPage />} />
                <Route path="*" element={<p>Cette page n'existe pas!</p>} />
            </Routes>
        </BrowserRouter>
    </div>)

};

export default App;