import React from 'react'
//Animations
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

//Util
import { smallImage } from '../util'

const GameDetails = ({ pathId }) => {

    const { screenShot, game, isLoading } = useSelector(state => state.gameDetails)
    const history = useHistory();

    const exitDetailsHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('card-shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }


    return (
        <>
            {
                !isLoading &&
                <motion.div className="card-shadow" onClick={exitDetailsHandler}>
                    <motion.div className="details" layoutId={pathId}>
                        <div className="stats">
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
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
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, '1280')} alt="Image" />
                        </div>
                        <div className="description">
                            <p>{game.description_raw}</p>
                        </div>
                        <div className="galery">
                            {
                                screenShot.results.map(img => (
                                    <img key={img.id} src={smallImage(img.image, '1280')} alt="game" />
                                ))
                            }
                        </div>
                    </motion.div>
                </motion.div>
            }
        </>
    )
}

export default GameDetails
