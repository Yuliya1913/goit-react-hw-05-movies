import { themoviedbGetFilm } from 'service/themoviedb';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Films } from 'components/Films/Films';
import { SearchForm } from 'components/Form/SearchForm';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [popularFilm, setpopularFilm] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  // Достаем значение из URL строки
  const query = searchParams.get('query');
  // console.log(query);
  console.log(popularFilm);

  useEffect(() => {
    if (!query) {
      alert('Films not find');
      return;
    }

    (async () => {
      try {
        setIsloading(true);
        const { results } = await themoviedbGetFilm(query);

        // переберем массив и сoздадим новый с необходимыми свойствами
        const newResults = results.map(({ title, id, poster_path }) => {
          return { title, id, poster_path };
        });

        setpopularFilm(newResults);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, [query]);

  return (
    <>
      <div>
        <SearchForm />
        {popularFilm.length > 0 && <Films popularFilms={popularFilm} />}
        {isloading && <Loader />}
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default Movies;
