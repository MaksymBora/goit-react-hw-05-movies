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
    const input = searchParams.get('searchQuery');

    if (input !== null) {
      const result = async () => {
        try {
          const result = await fetchByQuery(input);
          setQueryResult(result);
        } catch (error) {
          console.log(error);
        }
      };

      result();
    }

    console.log(input);
  }, [searchParams]);

  const inputResult = searchParams.get('searchQuery') ?? '';

  const updateQueryString = e => {
    const searchValue = e.target.value;

    const searchParam = searchValue !== '' ? { searchQuery: searchValue } : {};
    setSearchParams(searchParam);

    setQuery(inputResult);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const result = async () => {
      try {
        const result = await fetchByQuery(query);
        setQueryResult(result);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        inputData={inputResult}
        queryString={updateQueryString}
      />
      <MovieList items={queryResult} stateItem={{ from: location }} />
    </div>
  );
};

export default SearchMovie;
