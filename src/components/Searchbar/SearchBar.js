import { Input, InputWrapper, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit, inputResult, queryString }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputWrapper>
        <Input
          id="planet"
          type="text"
          name="search"
          value={inputResult}
          onChange={queryString}
          placeholder="Probably Comedy"
          autoComplete="off"
        />
        <label for="planet">Enjoy</label>
      </InputWrapper>
      <Button type="submit">Search</Button>
    </form>
  );
};
