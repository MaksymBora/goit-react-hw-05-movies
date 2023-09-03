import { List, Item, Poster, MovieLink } from './MovieList.styled';

const MovieList = ({ items, stateItem }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      <List>
        {items.map(movie => {
          return (
            <Item key={movie.id}>
              <MovieLink to={`${movie.id}`} state={stateItem}>
                <Poster
                  src={imgBaseUrl + movie.poster_path}
                  alt={movie.title}
                />
                {movie.original_title}
              </MovieLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default MovieList;
