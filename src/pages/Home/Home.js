import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../../API';
import { useLocation } from 'react-router-dom';
import { Title } from './Home.styled';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

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
      <Title>Trending today</Title>
      <MovieList items={movieList} stateItem={{ from: location }} />
    </div>
  );
};

export default Home;
