import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGU2YWU3YTNlNDE4MjhiMmNmZDVhOGY0OTAyOWUxMiIsIm5iZiI6MTcyOTg1OTU2MC4wNzYyMywic3ViIjoiNjcxYjhlNWE0MjdjNWMxOWYwMjVlYjI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RCDA1MR8TOaihaXawbPjpcWaX9ECZE4KoW-YfWtMGO0'; // Заміни на свій токен

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await tmdbApi.get('/trending/movie/day');
  return response.data.results;
};


export const searchMovies = async (query) => {
  const response = await tmdbApi.get(`/search/movie`, {
    params: { query, include_adult: false, language: 'en-US', page: 1 },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};



export default tmdbApi;
