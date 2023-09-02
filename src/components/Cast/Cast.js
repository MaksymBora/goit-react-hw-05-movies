import { fetchCast } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, Img } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const result = await fetchCast(movieId);
        setCast(result);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      <CastList>
        {cast.map(actor => {
          const { name, profile_path, character, credit_id } = actor;
          return (
            <li key={credit_id}>
              <Img src={imgBaseUrl + profile_path} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </CastList>
    </div>
  );
};

export default Cast;
