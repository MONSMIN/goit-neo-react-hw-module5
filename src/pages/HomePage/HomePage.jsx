import { fetchTrendingMovies } from "../../api/api";
import { useState, useEffect } from "react";

import MovieList from "../../components/MovieList/MovieList";
import css from './HomePage.module.css'


const HomePage = () => {
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const heandlerMovies = async () => {
            setIsLoading(true)
            setError(false)
            try { 

                const result = await fetchTrendingMovies();
                setMovies(result);

            } catch(error) {
                console.log(error);
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        heandlerMovies();
    }, []);
    
    
    return (
        <div>
            {isLoading && <p>...Loading</p>}
            {error && <p>Error</p>}
            <h1 className={css.h1}>Trending today</h1>
            <MovieList movies={movies} isLoading={isLoading} error={error} />
        </div>
    );
};

export default HomePage;