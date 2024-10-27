import { fetchMovieReviews } from "../../api/api"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import css from "./MovieReviews.module.css";


const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleMovieReviews = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      setReviews(await fetchMovieReviews(movieId));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleMovieReviews();
  }, [movieId]);

  return (
    <>
      {reviews &&
        (reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <div className={css.reviewCard}>
                    <p>
                      <strong>Author: {author}</strong>
                    </p>
                    <p>{content}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>OMG, there are no reviews for this movie!</div>
        ))}

      {isLoading && <p>...Loading</p>}
      {isError && <p>Something went wrong</p>}
    </>
  );
};

export default MovieReviews;