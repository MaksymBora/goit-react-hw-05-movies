export const SearchBar = ({ onSubmit, inputResult, queryString }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={inputResult}
        onChange={queryString}
      />
      <button type="submit">Search</button>
    </form>
  );
};
