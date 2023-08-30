import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId, 'cast');
  return (
    <div>
      <h2>Cast</h2>
      <p>Lorem Imdasdasdasd</p>
    </div>
  );
};
