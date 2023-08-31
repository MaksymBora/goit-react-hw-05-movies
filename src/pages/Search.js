import { useEffect, useState } from 'react';
import { fetchByQuery } from '../API';
import { MovieList } from 'components/MovieList';
import { useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const inputResult = searchParams.get('searchQuery');

  useEffect(() => {
    const result = async () => {
      try {
        const result = await fetchByQuery(query);
        setQueryResult(result);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, [query]);

  const onSubmitResult = e => {
    e.preventDefault();
    const inputResult = searchParams.get('searchQuery');
    setQuery(inputResult);
  };

  return (
    <div>
      <form onSubmit={onSubmitResult}>
        <input
          type="text"
          value={inputResult}
          onChange={e => setSearchParams({ searchQuery: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList items={queryResult} />
    </div>
  );
};

export default SearchMovie;
