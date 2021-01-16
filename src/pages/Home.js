import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

//Components
import Game from '../components/Game'
import GameDetails from '../components/GameDetails'

//Styling and animations
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { fadeIn } from '../animations'

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

    const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);
    const { game } = useSelector((state) => state.gameDetails);

    const loadGame = (game) => {
        const isActive = game.id.toString() === pathId;

        return (
            <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} active={isActive} />
        )
    }

    return (
        <motion.div className='game-list' variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {
                        pathId && game.id && <GameDetails pathId={pathId} />
                    }
                </AnimatePresence>
                {
                    searched && (
                        <>
                            <h2> Searched games: {searched.length}</h2>
                            <motion.div className='games'>
                                {searched.map(game => (
                                    loadGame(game)
                                ))}
                            </motion.div>
                        </>
                    )
                }

                <h2>Upcoming</h2>
                <motion.div className='games'>
                    {upcoming.map(game => (
                        loadGame(game)
                    ))}
                </motion.div>
                <h2>Popular games</h2>
                <motion.div className='games'>
                    {popular.map(game => (
                        loadGame(game)
                    ))}
                </motion.div>
                <h2>New games</h2>
                <motion.div className='games'>
                    {newGames.map(game => (
                        loadGame(game)
                    ))}
                </motion.div>
            </AnimateSharedLayout>
        </motion.div >
    )
}

export default Home
