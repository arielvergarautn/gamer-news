import React from 'react'
//Animations
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';

const GameDetails = () => {

    const { screenShot, game } = useSelector(state => state.gameDetails)

    return (
        <motion.div className="card-shadow">
            {
                <div className="details">
                    <div className="stats">
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>Rating: {game.rating}</p>
                        </div>
                        <div className="info">
                            <h3>Platforms</h3>
                            <div className="platforms">
                                {
                                    game.platforms.map(platform => (
                                        <h3 key={platform.platform.id}>{platform.platform.name}</h3>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="media">
                        <img src={game.background_image} alt="Image" />
                    </div>
                    <div className="description">
                        <p>{game.description_raw}</p>
                    </div>
                    <div className="galery">
                        {
                            screenShot.results.map(img => (
                                <img key={img.id} src={img.image} alt="game" />
                            ))
                        }
                    </div>
                </div>
            }
        </motion.div>
    )
}

export default GameDetails
