import React from "react";

import * as Assets from '../../assets';
import getGoogleURL from '../../utils/getGoogleURL';
import './AuthPage.css'
import * as Components from '../../components';

const AuthPage = () => {
    return (
        <div className="auth-page">
            <div className="navbar-container">
                <Components.NavBar />
            </div>
            <h1>Connectez-vous pour parier sur les évènements les plus chauds de CS et tenter de gagner des lots d’enfer !</h1>

            <div className="auth-page-main">
                <p className="auth-page-title">Sélectionnez un mode de connexion</p>

                <div className="auth-page-mode-container">
                    <Components.ConnexionButton text='Connexion via Google' icon={Assets.google} link='LOL' />
                    <Components.ConnexionButton text='Connexion via Google' icon={Assets.google} link='LOL' />
                </div>
            </div>
            <div className="auth-page-footer">
                <Components.Footer />
            </div>
        </div>
    )
}

export { AuthPage };