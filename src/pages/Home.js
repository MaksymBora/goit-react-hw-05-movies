import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../API';

const Home = () => {
  useEffect(() => {
    const result = async () => {
      try {
        const movies = await fetchMovies();
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
