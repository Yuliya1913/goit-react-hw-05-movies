import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navpage}>
          <li>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.link}>
              Movies
            </NavLink>
          </li>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
