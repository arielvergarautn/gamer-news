import React, { useState } from 'react'

//Animations
import { motion } from 'framer-motion'

//Redux and Routes
import { fetchSearch } from '../actions/gamesAction'
import { useDispatch } from 'react-redux'

//Img
import close from '../img/close.svg'

const Search = () => {


    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearchHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        // setTextInput('');
    }

    const clearSearched = (e) => {
        e.preventDefault();
        setTextInput('');
        dispatch({ type: 'CLEAR_SEARCHED_GAMES' })
    }


    return (
        <form className='search' onSubmit={submitSearchHandler}>
            <input type="text" onChange={inputHandler} value={textInput} />
            {/* <img src={close} onClick={clearSearched} /> */}
            <button type='submit' onClick={submitSearchHandler}>Search</button>
        </form>
    )
}

export default Search
