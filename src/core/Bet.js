import moment from "moment";
import { getCampaign as generalGetCampaign } from "./Campaign";
import { campaigns_icons_map, campaigns_images_map } from "../assets";
import axios from "axios";

class Bet {
    constructor(id, name, bet_type, date_begin, date_end, image, icon, campaign) {
        this.id = id;
        this.name = name;
        this.bet_type = bet_type;
        this.date_begin = date_begin;
        this.date_end = date_end;
        this.image = image;
        this.icon = icon;
        this.campaign = campaign;
    }

    async getCampaign() {
        return generalGetCampaign(this.campaign)
    }
}

const betFromJSON = (data) => {
    if (!data) return null;
    return new Bet(data.id,
        data.name,
        data.bet_type,
        moment(data.date_begin, 'YYYY-MM-DD HH:mm').toDate(),
        moment(data.date_end, 'YYYY-MM-DD HH:mm').toDate(),
        campaigns_images_map[data.image],
        campaigns_icons_map[data.icon],
        data.campaign
    )
}

const getBet = async (id) => {
    return axios.get(process.env.REACT_APP_ENDPOINT + "/api/services/bets/getOne?id=" + id)
        .then(data => data.data)
        .then(data => {
            if (data.status === "success") {
                return betFromJSON(data.data)
            }
        })
}

export { Bet, betFromJSON, getBet }