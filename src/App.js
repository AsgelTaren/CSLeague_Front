import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing all pages
import * as Pages from './pages';
// Importing all components
import * as Components from './components';
// Importing all core stuff
import * as Core from './core';

// Test for OAuth2
import getViaRezoURL from './utils/getViaRezoURL';
import getGoogleURL from './utils/getGoogleURL';
import Cookies from "universal-cookie";

import { createUserDataStore } from './core/UserDataStore';

import './App.css';
import axios from 'axios';

// Main code of the website
const App = () => {
    const cookies = new Cookies()
    const store = createUserDataStore();
    return (<div>
        <BrowserRouter>
            <Components.NavBar />
            <Routes>
                <Route path="/" element={<Pages.WelcomePage />} />
                <Route path="/oauth" element={<Pages.AuthPage />} />
                <Route path="/oauth/error" element={<p>Une erreur est survenue!</p>} />
                <Route path="*" element={<p>Cette page n'existe pas!</p>} />
            </Routes>
        </BrowserRouter>
    </div>)

};

export default App;