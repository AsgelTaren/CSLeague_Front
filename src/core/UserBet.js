import axios from "axios";

export class UserBet {
    constructor(bet_id, choice, user_email, points_won) {
        this.bet_id = bet_id;
        this.choice = choice;
        this.user_email = user_email;
        this.points_won = points_won;
    }

    async getCampaign() {
        return this.bet.getCampaign()
    }
}

export const userBetFromJSON = (data) => {
    if (!data) return null;
    return new UserBet(data.bet_id, data.choice, data.user_email, data.points_won);
}

export const getUserBet = async (access_token, bet_id) => {
    return axios.post(process.env.REACT_APP_ENDPOINT + "/bets/userChoice", { access_token: access_token, bet: bet_id })
        .then(data => data.data)
        .then(data => {
            if (data.status === "success" && data.data) {
                return userBetFromJSON(data.data)
            }
        })
}