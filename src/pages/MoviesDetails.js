import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from '../API';
// import movieGenres from '../Genres.json';

const MoviesDetails = () => {
  const [currentMovie, setCurrenMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const movie = await fetchMovieById(movieId);
        setCurrenMovie(movie);
        setGenres([...movie.genres]);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, title, vote_average, overview } = currentMovie;

  return (
    <div>
      <img src={imgBaseUrl + poster_path} alt={title} />
      <h2>{title}</h2>
      <p>
        User score:{' '}
        {vote_average ? currentMovie.vote_average.toFixed(1) : 'N/A'}%
      </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <div>
        {genres.map(genre => {
          return <p key={genre.id}>{genre.name}</p>;
        })}
      </div>

      <p>Additional Information</p>
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
