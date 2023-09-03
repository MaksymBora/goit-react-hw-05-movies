import { Input, InputWrapper, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit, inputData, queryString }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputWrapper>
        <Input
          id="movies"
          type="text"
          name="search"
          value={inputData}
          onChange={queryString}
          placeholder="Probably Comedy"
          autoComplete="off"
        />
        <label htmlFor="movies">Enjoy</label>
      </InputWrapper>
      <Button type="submit">Search</Button>
    </form>
  );
};
