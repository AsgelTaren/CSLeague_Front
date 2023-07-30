import React, { useEffect } from 'react';
import { createUserDataStore } from '../../core/UserDataStore';
import Cookies from "universal-cookie";
import axios from "axios";
import getGoogleURL from '../../utils/getGoogleURL';
import { Logo } from '..';

import './NavBar.css';

const NavBar = () => {
    const store = createUserDataStore();
    const cookies = new Cookies();

    useEffect(() => {
        if (!cookies.get("user_token")) return;
        const user_token = cookies.get("user_token");
        if (!user_token.access_token) return;

        axios.post("http://localhost:8000/api/services/user/me", user_token).then(data => data.data).then(data => {
            if (data.status === "success") {
                store.setUser(data.data);
            }
        })
    }, [])

    return (<div className="navbar">
        <div className="navbar-left">
            <div className="navbar-logo">
                <Logo size="3.5rem" />
                <p> CS League</p>
            </div>
        </div>

        <div className="navbar-right">
            {!store.user ? <a className="user-login" href={getGoogleURL("LOL")}>Connexion</a> : <UserPin user={store.user} />}
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