import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { fetchMovies } from '../API';
import { MovieList } from 'components/MovieList';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

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
      <MovieList items={movieList} />
    </div>
  );
};

export default Home;
