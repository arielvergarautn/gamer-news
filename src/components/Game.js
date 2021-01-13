import React from 'react'
//Styling and animations
import { motion } from 'framer-motion'

//Redux
import { useDispatch } from 'react-redux'
import { loadGameDetails } from '../actions/gameDetailsAction'

const Game = ({ id, name, released, image }) => {

    const dispatch = useDispatch();
    const loadGameDetailsHandler = () => {
        dispatch(loadGameDetails(id));
    }
    return (
        <motion.div className='game' onClick={loadGameDetailsHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt="" />
        </motion.div>
    )
}

export default Game
