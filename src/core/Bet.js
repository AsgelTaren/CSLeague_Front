import moment from "moment";

class Bet {
    constructor(id, name, date_begin, date_end, image, campaign) {
        this.id = id;
        this.name = name;
        this.date_begin = date_begin;
        this.date_end = date_end;
        this.image = image;
        this.campaign = campaign;
    }
}

const betOfString = (data) => {
    return new Bet(data.id,
        data.name,
        moment(data.date_begin, 'YYYY-MM-DD HH:mm').toDate(),
        moment(data.date_end, 'YYYY-MM-DD HH:mm').toDate(),
        data.image,
        data.campaign
    )
}

export { Bet, betOfString }