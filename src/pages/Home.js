import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

//Components
import Game from '../components/Game'

//Styling and animations
import { motion } from 'framer-motion'
import styled from 'styled-components'


const Home = () => {

    //Fetch games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    const { popular, newGames, upcoming } = useSelector((state) => state.games);

    return (
        <motion.div className='game-list'>
            <h2>Upcoming</h2>
            <motion.div className='games'>
                {upcoming.map(game => (
                    <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Home
