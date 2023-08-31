import { useEffect, useState } from 'react';
import { fetchByQuery } from '../API';

const SearchMovie = () => {
  const [queryResult, setQueryResult] = useState([]);
  useEffect(() => {
    const result = async () => {
      try {
        const result = await fetchByQuery('superman');
        setQueryResult(result);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, []);

  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovie;