import React, { useEffect } from 'react'
//Styling and animations
import { motion } from 'framer-motion'
import { popup } from '../animations'

//Redux
import { useDispatch } from 'react-redux'
import { loadGameDetails } from '../actions/gameDetailsAction'

//Route
import { Link } from 'react-router-dom'

//Util
import { smallImage } from '../util'

const Game = ({ id, name, released, image, active }) => {

    const stringPathId = id.toString();

    const dispatch = useDispatch();

    const loadGameDetailsHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadGameDetails(id));
    }

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
            dispatch(loadGameDetails(id));
        }
    }, [active, id, dispatch])


    return (
        <motion.div className='game' onClick={loadGameDetailsHandler} layoutId={stringPathId} variants={popup} initial='hidden' animate='show'>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, '640')} alt="" />
            </Link>
        </motion.div >
    )
}

export default Game
