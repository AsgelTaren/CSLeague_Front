import axios from 'axios';

export class Prize{

    constructor(id,name,icon){
        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}

export function prizeOfJSON(data){
    return new Prize(data.id,data.name,data.icon)
}

export async function getPrizeOfCampaign(id){
    return axios.get(process.env.REACT_APP_ENDPOINT + `/prizes/ofCampaign?id=${id}`).then(data => data.data).then(data => {
        if (data.status === "success") {
            return data.data.map(item => prizeOfJSON(item))
        }
    })
}