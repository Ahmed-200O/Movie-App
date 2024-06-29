// src/Genres.js
import React from 'react';
import { getMoviesByGenre } from './api';

const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 27, name: 'Horror' }
];

const Genres = ({ setMovies }) => {
    const handleGenreChange = async (genreId) => {
        const movies = await getMoviesByGenre(genreId);
        setMovies(movies);
    };

    return (
        <div className='genre-buttons'>
            {genres.map((genre) => (
                <button className='btn' key={genre.id} onClick={() => handleGenreChange(genre.id)}>
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export default Genres;
