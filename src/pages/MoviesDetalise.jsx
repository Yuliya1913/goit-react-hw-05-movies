import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { themoviedbMoviesApiFilm } from 'service/themoviedb';

const MoviesDetalise = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [filmData, setFilmData] = useState(null);

  // const [popularFilm, setpopularFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getPopularFilm() {
      try {
        setIsLoading(true);

        const data = await themoviedbMoviesApiFilm(movieId);
        console.log(data);

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
      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
      {/* Если есть данные в массиве, то рендерим их */}
      {/* {popularFilm.length > 0 && <Films popularFilms={popularFilm} />} */}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesDetalise;
