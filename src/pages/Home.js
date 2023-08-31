import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../API';

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
  // console.log(movieList[0].id);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movieList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
