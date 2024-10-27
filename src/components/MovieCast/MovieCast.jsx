import {getMovieCast} from '../../api/api';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieImg from '../MovieImg/Movieimg';
import css from './MovieCast.module.css';

const MoviesCast = () => {

    const {movieId} = useParams();
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const heandlerCast = async () => {
        setIsLoading(true);
        setError(false);
        try {
            const result = await getMovieCast(movieId);
            setCast(result);
        } catch(error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        heandlerCast();
    }, [movieId]);

    
    return (
        <>
          {cast &&
            (cast.length > 0 ? (
              <ul>
                {cast.map(({ id, profile_path, name, character }) => {
                  return (
                    <li key={id}>
                      <div className={css.castCard}>
                        <MovieImg path={profile_path} />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div>OMG, there are no cast for this movie!</div>
            ))}
    
          {isLoading && <p>...Loading</p>}
          {error && <p>...Error</p>}
        </>
      );
    };

export default MoviesCast;