import { CartFilm } from 'components/Cart/CartFilm';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { themoviedbMoviesApiFilm } from 'service/themoviedb';

const MoviesDetalise = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [filmData, setFilmData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  console.log(filmData);
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
      <button>go to back</button>
      {filmData && <CartFilm film={filmData} />}

      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesDetalise;
