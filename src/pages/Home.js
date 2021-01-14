import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

//Components
import Game from '../components/Game'
import GameDetails from '../components/GameDetails'

//Styling and animations
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

//Route
import { useLocation } from 'react-router-dom'

const Home = () => {

    //Get the current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2] || null;

    //Fetch games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    const { popular, newGames, upcoming } = useSelector((state) => state.games);

    return (
        <motion.div className='game-list'>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {
                        pathId && <GameDetails pathId={pathId} />
                    }
                </AnimatePresence>
                <h2>Upcoming</h2>
                <motion.div className='games'>
                    {upcoming.map(game => (
                        <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} />
                    ))}
                </motion.div>
                <h2>Popular games</h2>
                <motion.div className='games'>
                    {popular.map(game => (
                        <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} />
                    ))}
                </motion.div>
                <h2>New games</h2>
                <motion.div className='games'>
                    {newGames.map(game => (
                        <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} />
                    ))}
                </motion.div>
            </AnimateSharedLayout>
        </motion.div>
    )
}

export default Home
