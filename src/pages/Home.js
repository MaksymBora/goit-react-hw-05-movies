import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../API';
import { useLocation } from 'react-router-dom';

const MovieList = lazy(() => import('../components/MovieList'));

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await fetchMovies();

        if (movies.length) {
          setMovieList(movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList items={movieList} stateItem={{ from: location }} />
    </div>
  );
};

export default Home;
