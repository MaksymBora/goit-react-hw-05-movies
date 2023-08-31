import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovies } from '../API';
import movieGenres from '../Genres.json';

const MoviesDetails = () => {
  const [currentMovie, setCurrenMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await fetchMovies();

        const movieById = movies.find(movie => movie.id === parseInt(movieId));

        if (movieById) {
          setCurrenMovie({ ...movieById });
          setGenres([...movieById.genre_ids]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  const getGenres = () => {
    return movieGenres.genres.map(genre => {
      return genres.includes(genre.id) ? genre.name : null;
    });
  };
  const showGenres = getGenres().filter(genre => genre !== null);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, title, popularity, overview } = currentMovie;
  const userScope = ((popularity / 1000) * 100).toFixed(0);
  return (
    <div>
      <img src={imgBaseUrl + poster_path} alt={title} />
      <h2>{title}</h2>
      <p>User scope: {userScope}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <div>
        {showGenres.map(genre => {
          return <p key={genre}>{genre}</p>;
        })}
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
