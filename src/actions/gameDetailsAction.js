import axios from 'axios';
import { gameDetailsUrl, gameScreenshotsUrl as gameScreenShotUrl } from '../api'

export const loadGameDetails = (id) => async (dispatch) => {

    //IS LOADING
    dispatch({
        type: 'LOADING_DETAILS'
    });

    //FETCH AXIOS
    const gameData = await axios.get(gameDetailsUrl(id));
    const screenShotData = await axios.get(gameScreenShotUrl(id));

    dispatch({
        type: 'GET_GAME_DETAILS',
        payload: {
            game: gameData.data,
            screenShot: screenShotData.data,
        }
    })
}