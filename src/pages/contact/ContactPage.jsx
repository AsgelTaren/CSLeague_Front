import React from 'react';
import './ContactPage.css';
import * as Components from '../../components';


const ContactPage = () => {
    function sendEmail() {
        var message = document.getElementById('input-message').value.toString();
        var subject = document.getElementById('input-objet').value.toString();

        console.log(message)
        const toSend = 'mailto:csleague.contact@gmail.com?subject=' + subject + '&body=' + message.replaceAll("\n", "%0D%0A") // très important d'utiliser replaceAll et non replace, sinon un seul retour à la ligne est pris en compte.
        window.open(toSend); //?subject=subject&body=body
    }

    return (
        <div className='contact-page-container'>
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
        </div>
    )
}

export { ContactPage }