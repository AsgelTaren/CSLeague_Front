import React, { useEffect } from 'react';
import { createUserDataStore } from '../../core/';
import Cookies from "universal-cookie";
import axios from "axios";
import * as Components from '../../components';
import getGoogleURL from '../../utils/getGoogleURL';
import { Logo, Logo_Instagram, NavigationButton } from '..';
import { useNavigate } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    const store = createUserDataStore();
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get("user_token")) return;
        const user_token = cookies.get("user_token");
        if (!user_token.access_token) return;

        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/user/me", user_token).then(data => data.data).then(data => {
            if (data.status === "success") {
                store.setUser(data.data);
            }
        })
    }, []);

    let navigate = useNavigate();

    return (<div className="navbar">
        <div className="navbar-left">
            <div className='navbar-left__logo-csleague logo' onClick={() => { navigate('/') }}>
                <Logo size="100%" />
            </div>
            <div className='navbar-left__navigation-tabs'>
                <div className='bouton-mes-paris-container' onClick={() => { navigate('/profile') }}>
                    <NavigationButton text="Mon Profil" />
                </div>
            </div>
        </div>

        <div className="navbar-right">
            {store.user ? <UserPin user={store.user} /> :
                <div className='connexion-button' onClick={() => { navigate('/oauth') }}>
                    <Components.NavigationButton text='Connexion' />
                </div>
            }
            <div className="navbar-right__logo-instagram logo">
                <Logo_Instagram size="100%" className="navbar__logo-instagram" />
            </div>
        </div>

    </div>)

};

const UserPin = ({ user }) => {

    return (<div className="userpin">
        <p>{user.name}</p>
        <img src={user.picture} alt="userpic" />
    </div>)
}

export { NavBar };