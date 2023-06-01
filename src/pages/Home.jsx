import { Films } from 'components/Films/Films';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import css from './pages.module/Home.module.css';
import { themoviedbApi } from 'service/themoviedb';

const Home = () => {
  const [popularFilm, setpopularFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getPopularFilms() {
      try {
        setIsLoading(true);

        const { results } = await themoviedbApi();

        //Если нет пришедших данных-выходим
        if (!results) return;

        //   переберем массив и сoздадим новый с необходимыми свойствами
        const newResults = results.map(({ title, id, poster_path }) => {
          return { title, id, poster_path };
        });

        setpopularFilm([...newResults]);
      } catch (error) {
        setError('Что-то пошло не так');
      } finally {
        setIsLoading(false);
      }
    }
    getPopularFilms();
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.title}>Trending today</div>

      {/* Если есть данные в массиве, то рендерим их */}
      {popularFilm.length > 0 && <Films popularFilms={popularFilm} />}

      {isLoading && <Loader />}

      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
