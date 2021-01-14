const initialState = {
    game: {
        platforms: [],
    },
    screenShot: {
        results: [],
    },
}

const gameDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GAME_DETAILS':
            return {
                ...state,
                game: action.payload.game,
                screenShot: action.payload.screenShot,
            };
        default:
            return { ...state };
    }
}

export default gameDetailsReducer;