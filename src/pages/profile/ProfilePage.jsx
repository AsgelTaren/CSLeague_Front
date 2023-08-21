import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import { createUserDataStore, userBetFromJSON } from '../../core/';
import * as Components from '../../components';
import axios from 'axios';
import Cookies from "universal-cookie";

const ProfilePage = () => {
    const cookies = new Cookies()
    const [points, setPoints] = useState()
    const [bets, setBets] = useState([])
    useEffect(() => {
        if (!cookies.get("user_token")) return;
        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/user/getPoints", { access_token: cookies.get("user_token").access_token }).then(data => data.data).then(data => {
            setPoints({ points: data.data.points_wei, rank: data.data.rank })
        })
        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/user/ofToken", { access_token: cookies.get("user_token").access_token }).then(data => console.log(data.data))
        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/bets/ofUser", { access_token: cookies.get("user_token").access_token })

            .then(data => data.data.data.map(bet => userBetFromJSON(bet))).then(data => setBets(data))
    }, [])
    return (
        <div className='page-mes-paris'>

            <div className='header-page-mes-paris'>
                <div className='header-component'>
                    <p>Votre fortune s'élève à :</p>
                    <h1 className='header-info'>{points ? points.points : "Non acquis"}</h1>
                    <div></div>
                </div>
                <div className='header-component'>
                    <p>Votre classement est :</p>
                    <h1 className='header-info'>{points ? getProperRank(points.rank) : "Non acquis"}</h1>
                    <div></div>
                </div>
            </div>

            <div className='container-mes-paris'>
                <p>Vos paris :</p>
                {bets.map(bet =>
                    <div className="single-bet">
                        <Components.MyBet userBet={bet} />
                    </div>)}
            </div>

            <div className='bouton-déconnexion'><Components.NavigationButton text='Déconnexion' /></div>

            <Components.Footer />

        </div>
    )
}

const getProperRank = (rank) => {
    if (rank == 1) {
        return "1er"
    }
    return rank + "eme"
}

export {ProfilePage}
