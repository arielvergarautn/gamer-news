import React from 'react'
//Styling and animations
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Game = ({ id, name, released, image }) => {
    return (
        <motion.div className='game'>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt="" />
        </motion.div>
    )
}

export default Game
