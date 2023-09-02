import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi2';
import { Container, NavList, NavLinkHeader, Nav } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <header>
          <NavList>
            <li>
              <NavLinkHeader to="/">
                <HiOutlineHome size={24} />
              </NavLinkHeader>
            </li>
            <li>
              <NavLinkHeader to="/movies">Movies</NavLinkHeader>
            </li>
          </NavList>
        </header>
      </Nav>
      <main>
        <Suspense fallback={<div>Loadind...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
