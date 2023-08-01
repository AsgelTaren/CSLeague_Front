import React, { useEffect } from 'react';
import { createUserDataStore } from '../../core/UserDataStore';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import getGoogleURL from '../../utils/getGoogleURL';
import { Logo } from '..';
import * as Components from '../../components';

import './NavBar.css';

const NavBar = () => {
    const store = createUserDataStore();
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookies.get("user_token")) return;
        const user_token = cookies.get("user_token");
        if (!user_token.access_token) return;

        axios.post("http://localhost:8000/api/services/user/me", user_token).then(data => data.data).then(data => {
            if (data.status === "success") {
                store.setUser(data.data);
                axios.post("http://localhost:8000/api/services/campaigns/get", user_token).then(data => console.log(data.data));
            }
        })
    }, [])

    return (<div className="navbar">
        <div className="navbar-left">
            <div className="navbar-logo">
                <Logo size="3.5rem" />
                <p> CS League</p>
            </div>
            <div className="navbar-items">
                <p>Mes paris</p>
            </div>
        </div>

        <div className="navbar-right">
            {!store.user ? <p className="user-login" onClick={() => navigate("/oauth")}>Connexion</p> : <UserPin user={store.user} />}
            <Components.Logo_Instagram />
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