import axios from "axios";
import { campaigns_icons_map, campaigns_images_map, campaigns_partners_map } from "../assets";
import { betFromJSON } from './Bet';

class Campaign {

    constructor(id, name, image, icon, desc, partner) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.icon = icon;
        this.desc = desc;
        this.partner = partner;
    }

    async getBets() {
        return axios.get(process.env.REACT_APP_ENDPOINT + "/api/services/bets/getOfCampaign?id=" + this.id)
            .then(data => data.data)
            .then(data => {
                if (data.status === "success") {
                    return data.data.map(betJSON => betFromJSON(betJSON))
                }
            })
    }

}

const campaignFromJSON = (data) => {
    return new Campaign(data.id, data.name, campaigns_images_map[data.image], campaigns_icons_map[data.icon], data.desc, campaigns_partners_map[data.partner])
}

const getCampaign = async (id) => {
    return axios.get(process.env.REACT_APP_ENDPOINT + "/api/services/campaigns/getOne?id=" + id)
        .then(data => data.data)
        .then(data => {
            if (data.status === "success") {
                console.log(id)
                return campaignFromJSON(data.data)
            }
        })
}

const getAllCampaigns = async () => {
    return axios.get(process.env.REACT_APP_ENDPOINT + "/api/services/campaigns/getAll").then(data => data.data).then(data => {
        if (data.status === "success") {
            return data.data.map(campaignJSON => campaignFromJSON(campaignJSON))
        }
    })
}

export { Campaign, getCampaign, getAllCampaigns }