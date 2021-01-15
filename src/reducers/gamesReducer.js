const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: null
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming,
            };
        case 'FETCH_SEARCHED_GAMES':
            return {
                ...state,
                searched: action.payload.searched
            };
        case 'CLEAR_SEARCHED_GAMES':
            return {
                ...state,
                searched: null
            };
        default:
            return { ...state };
    }
}

export default gamesReducer;
