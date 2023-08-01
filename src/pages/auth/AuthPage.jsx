import React from "react";

import * as Assets from '../../assets';
import getGoogleURL from '../../utils/getGoogleURL';
import './AuthPage.css'

const AuthPage = () => {
    return (<div className="auth-page">
        <div className="auth-page-main">
            <p className="auth-page-title">Sélectionnez un mode de connexion</p>
            <div className="auth-page-mode" onClick={() => {window.location=getGoogleURL("LOL")}}>
                <img src={Assets.google} alt="google" />
                <p> Connexion via Google</p>
            </div>
        </div>
    </div>)
}

export { AuthPage };