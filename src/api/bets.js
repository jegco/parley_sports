import axios from "axios";

const url = "https://maps-1510612754588.firebaseio.com/bets.json";

const betsService = {
  getBets: () => {
    return axios.get(url);
  }
};

export default betsService;
