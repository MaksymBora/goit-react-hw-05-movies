import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../API';
import toast, { Toaster } from 'react-hot-toast';

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
        toast.error(error);
      }
    };

    result();

    console.log(input);
  }, [input]);

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return toast.error('Sorry, please provide a search word');
    }
    setSearchParams({ searchQuery: query });
    toast.success(
      <div>
        I like <b>{query}</b> too!
      </div>,
      {
        duration: 4000,
        icon: '🔥',
      }
    );
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
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
};

export default SearchMovie;
