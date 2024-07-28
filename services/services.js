import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWZmOTE1OTdhZTZiMDU3MWViYzAxMGQ1YTJiZDUyZSIsIm5iZiI6MTcyMTkzMzkxNC40NzA2OTcsInN1YiI6IjY2YTI1NzYzY2EyMzA4N2I0YWNmODdmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3aq5YafhgnqyLg0JId3gSpaVKVOVuZp8zw0DajHEpbw';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getMovies = async (category, page) => {
  const response = await api.get(`/movie/${category}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const getMovieDetail = async category => {
  const response = await api.get(`/movie/${category}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const searchMovies = async (query, page) => {
  const response = await api.get(`search/movie?page=${page}&query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;

  // getMovies('search/movie', page, query)
};
