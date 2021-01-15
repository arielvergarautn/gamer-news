//Base url 
const base_url = 'https://api.rawg.io/api/';

//Date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10)
        return `0${day}`;
    else
        return day;
}
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10)
        return `0${month}`;
    else
        return month;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//New games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;


//URLS
//Games
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//Game details
export const gameDetailsUrl = (id) => `${base_url}games/${id}`;
//Game screenshots
export const gameScreenshotsUrl = (id) => `${base_url}games/${id}/screenshots`;

//Searched games
export const searchedGameUrl = (game_name) => `${base_url}games?search=${game_name}`;