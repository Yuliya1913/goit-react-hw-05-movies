import { Button } from 'components/Button/Button';
import { CartFilm } from 'components/Cart/CartFilm';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { themoviedbMoviesApiFilm } from 'service/themoviedb';
import css from './pages.module/MoviesDetalise.module.css';

const MoviesDetalise = () => {
  const { movieId } = useParams();

  const location = useLocation();
  console.log(location);
  const [filmData, setFilmData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const BackLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getPopularFilm() {
      try {
        setIsLoading(true);

        const data = await themoviedbMoviesApiFilm(movieId);
        //Если нет пришедших данных-выходим
        if (!data) return;

        setFilmData(data);
      } catch (error) {
        setError('Что-то пошло не так');
      } finally {
        setIsLoading(false);
      }
    }
    getPopularFilm();
  }, [movieId]);

  return (
    <>
      <Button path={BackLink.current} />
      {filmData && <CartFilm film={filmData} />}

      <h2 className={css.title_data}>Additional information</h2>
      <Link to="cast" className={css.link_data}>
        Cast
      </Link>
      <Link to="reviews" className={css.link_data}>
        Reviews
      </Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesDetalise;
