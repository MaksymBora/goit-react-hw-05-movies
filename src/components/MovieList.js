import { Link } from 'react-router-dom';

const MovieList = ({ items, stateItem }) => {
  return (
    <>
      <ul>
        {items.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={stateItem}>
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
