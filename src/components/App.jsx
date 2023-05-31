import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import Movies from 'pages/Movies';
import Home from 'pages/Home';
import MoviesDetalise from 'pages/MoviesDetalise';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetalise />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
