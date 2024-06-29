const API_KEY = '98782abc8eca0f33693afe11c3c7bf65';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}&api_key=${API_KEY}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const getPopularMovies = () => fetchMovies('movie/popular');
export const searchMovies = (query) => fetchMovies(`search/movie?query=${query}`);
export const getMoviesByGenre = (genreId) => fetchMovies(`discover/movie?with_genres=${genreId}`);
