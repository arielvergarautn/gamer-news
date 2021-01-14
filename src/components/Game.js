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

    const stringPathId = id.toString();

    const dispatch = useDispatch();
    const loadGameDetailsHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadGameDetails(id));
    }
    return (
        <motion.div className='game' onClick={loadGameDetailsHandler} layoutId={stringPathId}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, '640')} alt="" />
            </Link>
        </motion.div >
    )
}

export default Game
