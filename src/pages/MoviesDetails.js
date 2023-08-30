import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    </div>
  );
};

export default MoviesDetails;
