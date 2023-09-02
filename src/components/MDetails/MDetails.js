import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  Img,
  WrapperDetails,
  Title,
  Description,
  AddInfoWrapper,
  AddInfoList,
  LinkInfo,
} from './MDetails.styled';

export const MDetails = ({
  items: { poster_path, title, vote_average, overview },
  genres,
}) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';

  return (
    <Wrapper>
      <WrapperDetails>
        <div>
          <Img src={imgBaseUrl + poster_path} alt={title} />
        </div>

        <div>
          <Title>{title}</Title>
          <Description>
            User score: {vote_average ? vote_average.toFixed(1) : 'N/A'}%
          </Description>
          <Title>Overview</Title>
          <Description>{overview}</Description>
          <Title>Genres</Title>
          <div>
            {genres.map(genre => {
              return <Description key={genre.id}>{genre.name}</Description>;
            })}
          </div>
        </div>
      </WrapperDetails>

      <AddInfoWrapper>
        <Title>Additional Information</Title>
        <AddInfoList>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </AddInfoList>
      </AddInfoWrapper>

      <Suspense fallback={<div>Loadind...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
