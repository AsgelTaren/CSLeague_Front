import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Logo } from '../../components';
import qs from 'qs';

import './WelcomePage.css';
import axios from 'axios';

const WelcomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        if (!searchParams.get("code"))
            return;
        const data = {
            grant_type: "authorization_code",
            code: searchParams.get("code"),
            redirect_uri: "http://localhost:3000",
            client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
            client_secret: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET
        };
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'https://accounts.google.com/o/oauth2/v2/token'
        }

        axios(options).then(data => data.data).then(data => {
           axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${data.access_token}`).then(dat => console.log(dat));

        });

    }, [])
    return (<div className="welcome-page">
        <div className="welcome-page-main">
            <Logo />
            <div className="welcome-page-main-name">
                <p>CS League</p>
            </div>
        </div>

    </div>)
};

export { WelcomePage };