import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import { userBetFromJSON } from '../../core/';
import * as Components from '../../components';
import axios from 'axios';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate()
    const cookies = new Cookies()
    const [points, setPoints] = useState()
    const [bets, setBets] = useState([])
    useEffect(() => {
        if (!cookies.get("user_token")) return;
        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/user/getPoints", { access_token: cookies.get("user_token").access_token }).then(data => data.data).then(data => {
            setPoints({ points: data.data.points_won ?? 0, rank: data.data.rank })
        })
        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/user/ofToken", { access_token: cookies.get("user_token").access_token }).then(data => console.log(data.data))
        axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/bets/ofUser", { access_token: cookies.get("user_token").access_token })

            .then(data => { console.log(data); return data.data.data.map(bet => userBetFromJSON(bet)) }).then(data => setBets(data))
    }, [])
    return (
        <div className='page-mes-paris'>

            <div className='header-page-mes-paris'>
                <div className='header-component'>
                    <p>Votre fortune s'élève à :</p>
                    <h1 className='header-info'>{points ? Math.round(points.points*100)/100 : "Non acquis"} BuCS</h1>
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
                {bets.map((userBet, index) =>
                    <div className="single-bet">
                        <Components.MyBet userBet={userBet} cookies={cookies} navigate={navigate} key={index} />
                    </div>)}
            </div>
        </div >
    )
}

const getProperRank = (rank) => {
    if (isNaN(parseFloat(rank)) || !isFinite(rank)) {
        return rank;
    }
    if (rank === 1) {
        return "1er"
    }
    return rank + "eme"
}

export { ProfilePage }
