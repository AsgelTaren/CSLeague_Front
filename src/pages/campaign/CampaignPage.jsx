import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getCampaign } from '../../core';
import * as Components from '../../components';
import * as Assets from '../../assets';
// MUI Grid Layout Imports
import { styled } from '@mui/system';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './CampaignPage.css';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     //...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     //color: theme.palette.text.secondary,
// }));

const CampaignPage = () => {
    const [campaign, setCampaign] = useState();
    const [bets, setBets] = useState([]);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (!searchParams.get("id")) return;
        getCampaign(searchParams.get("id")).then(campaign => {
            setCampaign(campaign);
            campaign.getBets().then(bets => setBets(bets))
        })

    }, [searchParams])


    if (!campaign) {
        return (<div><p>Cette campagne n'existe pas</p></div>)
    }

    // Ceci permet d'obtenir les noms et les images des prizes :
    const prizes_names = campaign.prize_name.split(",");
    const prizes_images = campaign.prize_icon.split(",");

    let prize_data = prizes_names.map((value, index) => ({ name: value, background: Assets.campaigns_prizes_map[prizes_images[index]] }));


    return (<div className="campaign-page">

        <div className="campaign-page-bouton-retour" onClick={() => { navigate("/") }}>
            <Components.BoutonRetour />
        </div>

        <div className="campaign-image">
            <img src={campaign.image} alt="campaign_image" />
        </div>

        <div className="campaign-infos-container">
            <div className="campaign-infos">
                <div className="campaign-infos-title">
                    <img src={campaign.icon} alt="icon" />
                    <p>{campaign.name}</p>
                </div>
            </div>

            <div className="campaign-desc">
                <p>{campaign.desc}</p>
            </div>

            <div className="campaign-prizes">
                <div className="campaign-prizes-left">
                    <p>Organisé par :</p>
                    <div className="campaign-page__logo-csleague">
                        <Components.Logo size="100%" />
                    </div>
                    <img src={campaign.partner_icon} alt="logo-partner" />
                </div>
                <div className="campaign-prizes-right">
                    <p>A gagner :</p>
                    {prize_data.map((prize, index) => (
                        <img src={prize.background} alt="prize-background" key={index} />
                    ))}
                </div>
            </div>

            <h1 className="a-vos-marques">A vos marques, prêts, pariez !</h1>
        </div>

        <div className="campaign-page-bets">
            <Box sx={{ flexGrow: 2 }}>
                <Grid container spacing={5} columns={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
                    {bets.map((bet, index) => (
                        <Grid item xs={2} className="bet-grid__single-bet" >
                            <Components.BetCard bet={bet} key={index} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>

    </div>)
}

export { CampaignPage }