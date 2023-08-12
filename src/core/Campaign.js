import axios from "axios";
import { campaigns_icons_map, campaigns_images_map, campaigns_partners_map as campaigns_partner_icon_map, campaigns_prizes_map } from "../assets";
import { betFromJSON } from './Bet';

class Campaign {

    constructor(id, name, image, icon, desc, partner_name, partner_icon, prize_name, prize_icon) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.icon = icon;
        this.desc = desc;
        this.partner_name = partner_name;
        this.partner_icon = partner_icon;
        this.prize_name = prize_name;
        this.prize_icon = prize_icon;
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
    return new Campaign(
        data.id, 
        data.name, 
        campaigns_images_map[data.image], 
        campaigns_icons_map[data.icon], 
        data.desc, data.partner_name, 
        campaigns_partner_icon_map[data.partner_icon], 
        data.prize_name, 
        data.prize_icon
    )
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