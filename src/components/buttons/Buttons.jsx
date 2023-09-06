import React from 'react';
import './Buttons.css';

const BoutonRetour = () => {
    return (
        <div className='container__bouton-retour'>
            <button className='bouton-retour'>
                <div className='arrow'>
                    <div className='head'>
                        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2L2.69146 13.8399C2.3097 14.2396 2.32459 14.8732 2.72471 15.2545L14 26" stroke="var(--color-secondary)" stroke-width="3" />
                        </svg>
                    </div>
                    <div className='line'>
                        {/* <svg width="45" height="1" viewBox="0 0 45 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="45" y1="0.5" y2="0.5" stroke="#802626" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="4" viewBox="0 0 36 4" fill="none">
                            <path d="M0 2H36" stroke="#802626" strokeWidth="6" />
                        </svg>
                    </div>
                </div>
                Retour
            </button>
        </div>
    )
}

const ClassicButton = ({ text, icon, onClick = () => { }, style }) => {
    return (
        <button className='button-classic' onClick={onClick} style={style}>
            {text}
            {icon}
        </button>
    )
}

const NavigationButton = ({ text }) => {
    return (
        <div className='navigation-tabs' >
            <p>{text}</p>

            <div className='bottom-line'>
                <div className='bottom-line-left'></div>
                <div className='bottom-line-right'></div>
            </div>
        </div>
    )
}

const ConnexionButton = ({ text, icon, link }) => {
    return (
        <div className='connexion-button-container' onClick={() => window.location = link}>
            <img src={icon} alt="google" />
            <p>{text}</p>
        </div>
    )
}

export { ClassicButton, BoutonRetour, NavigationButton, ConnexionButton }