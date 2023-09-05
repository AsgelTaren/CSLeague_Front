import axios from "axios";
import { campaigns_icons_map, campaigns_images_map, campaigns_partners_map as campaigns_partner_icon_map, campaigns_prizes_map } from "../assets";
import { betFromJSON } from './Bet';

class Campaign {

    constructor(id, name, image, icon, description) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.icon = icon;
        this.description = description;
    }
}

const campaignOfJSON = (data) => {
    return new Campaign(data.id, data.name, data.image, data.icon, data.description)
}


const getAllCampaigns = async () => {
    return axios.get(process.env.REACT_APP_ENDPOINT + "/campaigns/all").then(data => data.data).then(data => {
        if (data.status === "success") {
            return data.data.map(item => campaignOfJSON(item))
        }
    })
}

const getUniqueCampaign = async (id) => {
    return axios.get(process.env.REACT_APP_ENDPOINT + `/campaigns/unique?campaign=${id}`).then(data => data.data).then(data => {
        console.log(data)
        if (data.status === "success") {
            return data.data;
        }
        return undefined;
    })
}

export { Campaign, getAllCampaigns,getUniqueCampaign }