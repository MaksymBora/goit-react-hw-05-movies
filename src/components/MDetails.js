export const MDetails = ({
  items: { poster_path, title, vote_average, overview },
  genres,
}) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <img src={imgBaseUrl + poster_path} alt={title} />
      <h2>{title}</h2>
      <p>User score: {vote_average ? vote_average.toFixed(1) : 'N/A'}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <div>
        {genres.map(genre => {
          return <p key={genre.id}>{genre.name}</p>;
        })}
      </div>
      <p>Additional Information</p>
    </>
  );
};
