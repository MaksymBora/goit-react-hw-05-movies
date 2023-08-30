import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    //   HTTP Request
  }, []);

  return (
    <div>
      <h2>Details🇺🇦</h2>
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
