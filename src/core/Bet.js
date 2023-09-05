import moment from "moment";
import {  } from "./Campaign";
import axios from "axios";

class Bet {
    constructor(id, name, bet_type, date_begin, date_end, image, icon, campaign, choice_name, choice_background,gains,answer,orders) {
        this.id = id;
        this.name = name;
        this.bet_type = bet_type;
        this.date_begin = date_begin;
        this.date_end = date_end;
        this.image = image;
        this.icon = icon;
        this.campaign = campaign;
        this.choice_name = choice_name;
        this.choice_background = choice_background;
        this.gains = gains;
        this.answer = answer;
        this.orders = orders
    }

    async placeBetForUser(access_token,provider, bet_choice) {
        return axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/bets/placeBet", {access_token, bet_choice, bet_id: this.id,provider })
    }
}

const betFromJSON = (data) => {
    if (!data) return null;
    return new Bet(data.id,
        data.name,
        data.bet_type,
        moment(data.date_begin, 'YYYY-MM-DD HH:mm').toDate(),
        moment(data.date_end, 'YYYY-MM-DD HH:mm').toDate(),
       undefined,
        undefined,
        data.campaign,
        data.choice_name,
        data.choice_background,
        data.gains,
        data.answer,
        data.orders
    )
}

const getBet = async (id) => {
    return axios.get(process.env.REACT_APP_ENDPOINT + "/api/services/bets/getOne?id=" + id)
        .then(data => data.data)
        .then(data => {
            console.log(data)
            if (data.status === "success") {
                return betFromJSON(data.data)
            }
        })
}

export { Bet, betFromJSON, getBet }