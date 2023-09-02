import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  border: none;
  border-radius: 4px;
  padding: 10px;
  color: #fff;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
  background: rgba(122, 184, 147, 1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: color 250ms ease-in-out;

  &:hover {
    color: yellow;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const ContentWrapper = styled.div``;
