import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../API';
import { MDetails } from 'components/MDetails/MDetails';
import { BackLink, Wrapper, ContentWrapper } from './MovieDetails.styled';

const MoviesDetails = () => {
  const [currentMovie, setCurrenMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

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

  return (
    <Wrapper>
      <BackLink to={backLinkLocation.current}>Back</BackLink>

      <ContentWrapper>
        <MDetails items={currentMovie} genres={genres} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default MoviesDetails;
