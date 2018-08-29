import axios from 'axios';

const url = "https://maps-1510612754588.firebaseio.com/games.json";

const gamesService  = {
    getGames: () =>{
        return axios.get(url);
    }
};

export default gamesService;