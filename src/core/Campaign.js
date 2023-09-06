import axios from "axios";

class Campaign {

    constructor(id, name, image, icon, description, date_begin, date_end, allowedPromo) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.icon = icon;
        this.description = description;
        this.date_begin = date_begin;
        this.date_end = date_end;
        this.allowPromo = allowedPromo;
    }
}

const campaignOfJSON = (data) => {
    return new Campaign(data.id, data.name, data.image, data.icon, data.description, data.date_begin, data.date_end, data.allowPromo)
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
        if (data.status === "success") {
            return data.data;
        }
        return undefined;
    })
}

const getBetsOfCampaign = async (id) => {
    return axios.get(process.env.REACT_APP_ENDPOINT + `/bets/ofCampaign?campaign=${id}`).then(data => data.data).then(data => {
        console.log(data.data)
        if (data.status === "success") {
            return data.data;
        }
        return undefined;
    })
}

export { Campaign, getAllCampaigns, getUniqueCampaign, getBetsOfCampaign }