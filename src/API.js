import axios from 'axios';

const API_KEY = 'b580e55a4551b421271bf131dd03ab39';
axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

export const fetchMovies = async () => {
  try {
    const response = await axios.get('', {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
      },
      params: {
        key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
