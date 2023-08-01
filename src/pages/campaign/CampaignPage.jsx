import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {Campaign} from '../../core';
import * as Assets from '../../assets';
import axios from "axios";

const campaigns_icons = { toss: Assets.toss_logo };
const campaigns_images = { toss: Assets.campaign_test, wei: Assets.wei };

const CampaignPage = () => {
    const [campaign, setCampaign] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        if (searchParams.get("id"))
            axios.get("http://localhost:8000/api/services/campaigns/getOne?id=" + searchParams.get("id")).then(data => data.data).then(data => {
                if(data.status==="success"){
                    setCampaign(new Campaign(data.data.id,data.data.name))
                }
            })
    }, [])
    if (!campaign) {
        return (<div style={{ marginTop: "10rem" }}><p>Cette campagne n'existe pas</p></div>)
    }
    return (<div style={{ marginTop: "10rem" }}>{ }</div>)
}

export { CampaignPage, campaigns_icons, campaigns_images }