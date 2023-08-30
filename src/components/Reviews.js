import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId, 'reviews');

  return (
    <div>
      <h2>Reviews</h2>
      <p>Text REviews</p>
    </div>
  );
};
