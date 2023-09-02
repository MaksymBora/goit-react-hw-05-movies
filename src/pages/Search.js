import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { fetchByQuery } from '../API';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/Searchbar/SearchBar';

const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

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

  const inputResult = searchParams.get('searchQuery') ?? '';

  const updateQueryString = e => {
    const searchValue = e.target.value;

    const searchParam = searchValue !== '' ? { searchQuery: searchValue } : {};
    setSearchParams(searchParam);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setQuery(inputResult);
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        inputResult={inputResult}
        queryString={updateQueryString}
      />
      <MovieList items={queryResult} stateItem={{ from: location }} />
    </div>
  );
};

export default SearchMovie;
