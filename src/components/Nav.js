import React from 'react'

//Animations
import { motion } from 'framer-motion'

//Logo
import logo from '../img/logo.svg'

//Components
import Search from './Search'

const Nav = () => {
    return (
        <motion.nav className='nav'>
            <motion.div className="logo">
                <img src={logo} alt="logo" />
                <h3>Gamer news</h3>
            </motion.div>
            <Search />
        </motion.nav>
    )
}

export default Nav
