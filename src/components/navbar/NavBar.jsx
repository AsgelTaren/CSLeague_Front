import React, { useEffect } from 'react';
import { createUserDataStore } from '../../core/';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
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
            }
        })
    }, [])

    return (<div className="navbar">
        <div className="navbar-left">
            <div className="navbar-logo">
                <Logo size="3.5rem" />
            </div>
            <div className="navbar-items">
                <NavBarItem text="Mes Paris" navigate={navigate} />
                <NavBarItem text="A Venir" navigate={navigate} />
            </div>
        </div>

        <div className="navbar-right">
            {!store.user ? <NavBarItem text="Connexion" navigate={navigate} target="/oauth" /> : <UserPin user={store.user} />}
            <Components.Logo_Instagram />
        </div>

    </div>)

};

const NavBarItem = ({ text, target, navigate }) => {
    return (<div className="navbar-item" onClick={() => navigate(target)}>
        <p>{text}</p>
        <div className="navbar-items-underline"> </div>
    </div>)
}

const UserPin = ({ user }) => {

    return (<div className="userpin">
        <p>{user.name}</p>
        <img src={user.picture} alt="userpic" />
    </div>)
}

export { NavBar };