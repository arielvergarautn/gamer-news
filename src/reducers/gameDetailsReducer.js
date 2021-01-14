
const initialState = {
    game: {
        platforms: [],
    },
    screenShot: {
        results: [],
    },
    isLoading: false
}

const gameDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GAME_DETAILS':
            return {
                ...state,
                game: action.payload.game,
                screenShot: action.payload.screenShot,
                isLoading: false
            };
        case 'LOADING_DETAILS':
            return {
                ...state,
                isLoading: true
            };
        default:
            return { ...state };
    }
}

export default gameDetailsReducer;