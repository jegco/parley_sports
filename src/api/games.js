import axios from 'axios';

const url = "https://maps-1510612754588.firebaseio.com/games";

const gamesService  = {
    getGames: async () =>{
        return await axios.get(url);
    }
}

export default gamesService;