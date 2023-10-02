import axios from 'axios';

const API_KEY = '?api_key=7f6cfc769c2057b00f9c41481e14f95f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day${API_KEY}`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async id => {
  try {
    const response = await axios.get(`movie/${id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
      },
      params: {
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
      },
      params: {
        key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReview = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?language=en-US&page=1`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
        },
        params: {
          key: API_KEY,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByQuery = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
        },
        params: {
          key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
