import React from 'react'
//Animations
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

//Util
import { smallImage } from '../util'

//Icons
import apple from '../img/apple.svg'
import playstation from '../img/playstation.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import steam from '../img/steam.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

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

    const getPlatformImages = (platform) => {

        if (platform.toLowerCase().includes('playstation')) {
            return playstation;
        }
        else if (platform.toLowerCase().includes('xbox')) {
            return xbox;
        }
        else if (platform.toLowerCase().includes('pc')) {
            return steam;
        }
        else if (platform.toLowerCase().includes('nintendo')) {
            return nintendo;
        }
        else if (platform.toLowerCase().includes('ios')) {
            return apple;
        }
        else {
            return gamepad;
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating)
                stars.push(<img alt='start' src={starFull} key={i} />)
            else
                stars.push(<img alt='start' src={starEmpty} key={i} />)

        }

        return stars;
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
                                {
                                    getStars()
                                }
                            </div>
                            <div className="info">
                                <h3>Platforms</h3>
                                <div className="platforms">
                                    {
                                        game.platforms.map(platform => (
                                            <img key={platform.platform.id} title={platform.platform.name} src={getPlatformImages(platform.platform.name)} alt={platform.platform.name} />
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
