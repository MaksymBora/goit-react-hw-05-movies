import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../API';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList, 'before');
  useEffect(() => {
    const result = async () => {
      try {
        const movies = await fetchMovies();
        setMovieList(movies);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  console.log(movieList, 'after');

  return (
    <div>
      {movieList.length > 0 ? (
        <>
          <h2>{movieList[2].title}</h2> <p>{movieList[2].overview}</p>
        </>
      ) : (
        <h2>No movies available</h2>
      )}
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
