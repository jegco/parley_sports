import * as at from './types';

export const fetchGames = () => {return {type: at.FETCH_GAMES}}
export const fetchGamesSuccess = (games) => {
    return {
        type: at.FETCH_GAMES_SUCCESS,
        payload: {games}
    }}