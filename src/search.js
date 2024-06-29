// src/Search.js
import React, { useState } from 'react';
import { searchMovies } from './api';

const Search = ({ setMovies }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        const results = await searchMovies(query);
        setMovies(results);
    };

    return (
        <form onSubmit={handleSearch} className='formbox'>
            <input
            className='input'
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search for a movie'
            />
            <button type='submit' className='btn'>Search</button>
        </form>
    );
};

export default Search;
