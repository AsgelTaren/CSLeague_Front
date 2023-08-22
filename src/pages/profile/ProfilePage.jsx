import React from 'react';
import './ProfilePage.css';
import * as Components from '../../components';

const ProfilePage = () => {
    return (
        <div className='page-mes-paris'>

            <div className='navbar-container'><Components.NavBar /></div>

            <div className='header-page-mes-paris'>
                <div className='header-component'>
                    <p>Votre fortune s'élève à :</p>
                    <h1 className='header-info'>150.490 BuCS</h1>
                    <div></div>
                </div>
                <div className='header-component'>
                    <p>Votre classement est :</p>
                    <h1 className='header-info'>4ème</h1>
                    <div></div>
                </div>
            </div>

            <div className='container-mes-paris'>
                <p>Vos paris :</p>
                <div className='single-bet'>
                    <Components.MyBet />
                </div>
                <div className='single-bet'>
                    <Components.MyBet />
                </div>
                <div className='single-bet'>
                    <Components.MyBet />
                </div>
            </div>

            <div className='bouton-déconnexion'><Components.NavigationButton text='Déconnexion' /></div>

            <Components.Footer />

        </div>
    )
}

export { ProfilePage }