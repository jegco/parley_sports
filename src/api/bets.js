import axios from 'axios';

const url = "https://maps-1510612754588.firebaseio.com/bets";

const betsService  = {
    getBets: async () =>{
        return await axios.get(url);
    }
}

export default betsService;