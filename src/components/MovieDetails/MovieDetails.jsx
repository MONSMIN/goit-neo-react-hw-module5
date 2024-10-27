import MovieImg from "../MovieImg/Movieimg"

import css from "./MovieDetails.module.css"

const MovieDetails = ({ 
    movie : { backdrop_path, title, overview, genres, vote_average },
    }) => {

    return (
        <div className={css.contentWrapper}>
            <MovieImg className={css.movieImg} path={backdrop_path} alt={title} />
            <div>
                <h1>{title}</h1>
                <span>User Score: <strong>{Math.round(vote_average * 10)}%</strong></span>
                <div>
                <span>
                    <strong>Overview</strong>
                </span>
                <p>{overview}</p>
                </div>
                <div>
                <span>
                    <strong>Genres</strong>
                </span>
                <div>
                    {genres?.map(genre => (
                        <p key={genre.id}>{genre.name}</p>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;