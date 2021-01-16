import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchedGameUrl } from '../api';

//Action creator
export const loadGames = () => async (dispatch) => {
    //IS LOADING
    dispatch({
        type: 'LOADING_GAMES'
    });
    //FETCH AXIOS
    const popularGamesData = await axios.get(popularGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            newGames: newGamesData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    //IS LOADING
    dispatch({
        type: 'LOADING_GAMES'
    });
    //FETCH AXIOS
    const searchedGamesData = await axios.get(searchedGameUrl(game_name));
    dispatch({
        type: 'FETCH_SEARCHED_GAMES',
        payload: {
            searched: searchedGamesData.data.results
        }
    })
}



