import { useRef, useState, useEffect } from "react";
import { useParams, useLocation, Outlet, useNavigate } from "react-router-dom";

import { fetchMovieDetails } from "../../api/api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MovieNavigation from "../../components/MovieNavigation/MovieNavigation";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const refLocation = useRef(location.state);
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const heandlerMovies = async () => {
            setIsLoading(true);
            setError(false);
            
            try {
                const result = await fetchMovieDetails(movieId);
                setMovie(result);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        heandlerMovies();
    }, [movieId]);

    const handleGoBack = () => {
        navigate(refLocation.current);
    };

    return (
        <div>
            <button className={css.button} onClick={handleGoBack}>← Go Back</button>
            <div className={css["details-container"]}>
                <div className={css["detail-info"]}>

                    {movie && !isLoading && <MovieDetails movie={movie} />}
                    {isLoading && <p>...Loading</p>}
                    {error && <p>...Error</p>}
                </div>

                <h3>Additional information</h3>
                <MovieNavigation />
            </div>
            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;
