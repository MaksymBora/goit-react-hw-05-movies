import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 520px;
  text-align: center;
`;

export const Poster = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-height: 100%;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
`;

export const MovieLink = styled(Link)`
  padding: 10px;
  color: #000;
  font-size: 18px;
  transition: color 250ms ease-in-out;

  &:hover {
    color: #9400d3;
  }
`;
