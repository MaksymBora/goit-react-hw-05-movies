import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
`;

export const Nav = styled.nav`
  margin-bottom: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavLinkHeader = styled(NavLink)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border-radius: 8px;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &.active {
    color: #fff;
    background-color: #000;
  }
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
