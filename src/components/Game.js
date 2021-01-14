import React from 'react'
//Styling and animations
import { motion } from 'framer-motion'

//Redux
import { useDispatch } from 'react-redux'
import { loadGameDetails } from '../actions/gameDetailsAction'

//Route
import { Link } from 'react-router-dom'

//Util
import { smallImage } from '../util'

const Game = ({ id, name, released, image }) => {
    const dispatch = useDispatch();
    const loadGameDetailsHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadGameDetails(id));
    }
    return (
        <motion.div className='game' onClick={loadGameDetailsHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallImage(image, '640')} alt="" />
            </Link>
        </motion.div>
    )
}

export default Game
