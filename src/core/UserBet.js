import axios from "axios";
import { betFromJSON } from "./Bet";

export class UserBet {
    constructor(bet, choice,campaign_name,points_won) {
        this.bet = bet;
        this.choice = choice;
        this.campaign_name = campaign_name;
        this.points_won = points_won;
    }

    async getCampaign() {
        return this.bet.getCampaign()
    }
}

export const userBetFromJSON = (data) => {
    if (!data) return null;
    return new UserBet(betFromJSON(data), data.choice,data.campaign_name,data.points_won);
}

export const getUserBet = async (access_token,provider, bet_id)=>{
    return axios.post(process.env.REACT_APP_ENDPOINT + "/api/services/bets/singleOfUser",{access_token:access_token,bet_id:bet_id,provider})
    .then(data => data.data)
    .then(data => {
        console.log(data)
        if(data.status =="success" && data.data[0]){
            return userBetFromJSON(data.data[0])
        }
    })
}