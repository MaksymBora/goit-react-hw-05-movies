import { Link } from 'react-router-dom';

export const MovieList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
