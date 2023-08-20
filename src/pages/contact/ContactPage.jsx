import React from 'react';
import './ContactPage.css';
import * as Components from '../../components';


const ContactPage = () => {
    function sendEmail() {
        var message = document.getElementById('input-message').value.toString();
        var subject = document.getElementById('input-objet').value.toString();

        const toSend = 'mailto:justinjuhel@gmail.com?subject=' + subject + '%0D%0AMessage :%0D%0A' + message.replace("\n", "%0D%0A")
        window.open(toSend); //?subject=subject&body=body
    }

    return (
        <div className='contact-page-container'>
            <div className='navbar-container'>
                <Components.NavBar />
            </div>
            <div className='contact-page-content'>
                <h1 className='contact-page-header'>Si vous souhaitez nous contacter, n’hésitez pas à écrire votre message ci-dessous </h1>

                <div className='contact-form'>
                    <input type="text" id='input-objet' placeholder="Objet..." />
                    <textarea type="text" id='input-message' placeholder="Votre Message..." />
                </div>

                <div className='send-button' onClick={() => { sendEmail() }}>
                    <Components.ClassicButton text='Envoyer' icon={<Components.SendIcon />} />
                </div>
            </div>
            <div className='contact-page__footer'>
                <Components.Footer />
            </div>
        </div>
    )
}

export { ContactPage }