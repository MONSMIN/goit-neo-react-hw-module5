import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm/SearchForm";
import { searchMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get("query") ?? "";
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      if (!queryValue) return;
      const handleSearchMovies = async () => {
        setIsLoading(true);
        setIsError(false);
        setMovies(null);
  
        try {
          setMovies(await searchMovies(queryValue));
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
  
      handleSearchMovies();
    }, [queryValue]);
  
const handleSearchMovie = (query) => {
      setSearchParams(query);
    };

    return (
        <section>
            <SearchForm handleSearchMovie={handleSearchMovie} />
            {movies &&
                (movies.length > 0 ? (
                    <MovieList movies={movies} />
                    ) : (
                <div>Movies with search criteria not found</div>
            ))}
            
        </section>
    );
};

export default MoviesPage;