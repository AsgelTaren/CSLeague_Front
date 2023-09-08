import React, { useState, useEffect } from 'react';
import axios from "axios";

import './WeiBusPage.css';

const WeiBusPage = () => {

    const [ranking, setRanking] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_ENDPOINT + "/bus/ranking").then(data => data.data).then(data => {
            if (data.status === "success") {
                setRanking(data.data);
            }
        })
    }, [])
    return (<div className="wei-bus">
        <p className="wei-bus-title header-info">Classement des Bus WEI</p>
        <table className="wei-bus-ranking">
            <thead >
                <tr>
                    <th>Classement</th>
                    <th>Bus</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {ranking.map((rank, index) =>
                    <tr key={index}>
                        <td>{rank.rank}</td>
                        <td>{rank.bus}</td>
                        <td>{rank.total}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>)
}

export { WeiBusPage };