import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <header>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Suspense fallback={<div>Loadind...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </nav>
    </div>
  );
};
