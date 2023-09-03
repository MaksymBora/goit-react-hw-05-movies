import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { fetchByQuery } from '../API';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/Searchbar/SearchBar';

const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const SearchMovie = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('searchQuery') ?? '');
  const location = useLocation();

  const input = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!input) {
      setQueryResult([]);
      return;
    }
    const result = async () => {
      try {
        const result = await fetchByQuery(input);
        setQueryResult(result);
      } catch (error) {
        console.log(error);
      }
    };

    result();

    console.log(input);
  }, [input]);

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return alert(`Sorry, but we didn't find any results for "${input}"`);
    }

    setSearchParams({ searchQuery: query });
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        inputData={query}
        onChange={handleInputChange}
      />
      <MovieList items={queryResult} stateItem={{ from: location }} />
    </div>
  );
};

export default SearchMovie;
