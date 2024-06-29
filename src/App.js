import React, { useEffect, useState } from 'react';
import { getPopularMovies } from './api';
import './App.css';
import Search from './search';
import Genres from './Genres';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Movie App</h1>
        <Search setMovies={setMovies} />
        <Genres setMovies={setMovies} />
      </header>
      <main>
        <div className='movie-grid'>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className='movie-card'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))
          ) : (
            <p className='notfound'>No movies found</p>
          )}
        </div>
      </main>
      <footer className='footer'>
        <p>Contact Info</p>
        <span>Author: Ahmed Owusu</span><br></br>
        <span>Email: owusuahmed123@gmail.com</span><br></br>
        <span>Phone Number: 555-555-1234</span><br></br>
      </footer>
    </div>
  );
}

export default App;

