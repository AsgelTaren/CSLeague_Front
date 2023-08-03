import React from 'react';
import './Footer.css';
import { NavigationButton } from '../../components';
import { Logo_Instagram } from '../../components';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    let navigate = useNavigate()
    return (
        <div className='footer-container'>
            <div className='footer-left'>
                <div className='navigation-button-container' onClick={() => navigate('/contact')}>
                    <NavigationButton text="Contact" link="/contact" />
                </div>
            </div>
            <div className='footer-middle'>CS League est une association étudiante de CentraleSupélec qui a pour but d’intensifier la vie étudiante en proposant des paris sur les évènements majeurs du campus, puis d’offir des lots aux meilleurs parieurs.</div>
            <div className="footer-right__logo-instagram logo">
                <Logo_Instagram size="2rem" className="footer__logo-instagram" />
            </div>
        </div>
    )
}

export { Footer }