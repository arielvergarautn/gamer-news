import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'

const rootReducer = combineReducers({
    games: gamesReducer,
    //MORE REDUCERS
});

export default rootReducer;