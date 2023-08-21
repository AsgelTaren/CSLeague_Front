import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import * as Components from '../../components';
import axios from 'axios';
import Cookies from "universal-cookie";

const ProfilePage = () => {
    const cookies = new Cookies()
    const [points, setPoints] = useState()
    useEffect(() => {
        if (!cookies.get("user_token")) return;
        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/user/getPoints", { access_token: cookies.get("user_token").access_token }).then(data => data.data).then(data => {
            console.log(data)
            setPoints({ points: data.data.points_wei, rank: data.data.rank })
        })

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

const getProperRank = (rank) => {
    if (rank == 1) {
        return "1er"
    }
    return rank + "eme"
}

export {ProfilePage}
