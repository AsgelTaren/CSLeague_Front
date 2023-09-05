import axios from "axios";

class Bet {
    constructor(id, name, bet_type, date_begin, date_end, image, campaign, choice_names, choice_images, gains, answer) {
        this.id = id;
        this.name = name;
        this.bet_type = bet_type;
        this.date_begin = date_begin;
        this.date_end = date_end;
        this.image = image;
        this.campaign = campaign;
        this.choice_names = choice_names;
        this.choice_images = choice_images;
        this.gains = gains;
        this.answer = answer;
    }

    async placeBetForUser(access_token, provider, bet_choice) {
        return axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/bets/placeBet", { access_token, bet_choice, bet_id: this.id, provider })
    }
}

const betFromJSON = (data) => {
    if (!data) return null;
    return new Bet(data.id,
        data.name,
        data.bet_type,
        data.date_begin,
        data.date_end,
        data.image,
        data.campaign,
        data.choice_names,
        data.choice_images,
        data.gains,
        data.answer
    )
}

const getUniqueBet = async (id) => {
    return axios.get(process.env.REACT_APP_ENDPOINT + `/bets/unique?bet=${id}`).then(data => data.data).then(data => {
        if (data.status === "success") {
            return betFromJSON(data.data)
        }
        return undefined;
    })
}

export { Bet, betFromJSON, getUniqueBet }