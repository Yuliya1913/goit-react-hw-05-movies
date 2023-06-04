import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { themoviedbApiActorFilm } from 'service/themoviedb';
import css from './Cast.module.css';
import posterActor from 'image/no-poster-actor.png';

const Cast = () => {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [actorData, setActorData] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);

        const data = await themoviedbApiActorFilm(movieId);

        //Если нет пришедших данных-выходим
        if (!data) return;

        setActorData(data);
      } catch (error) {
        setError('Что-то пошло не так');
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {actorData &&
        actorData.map(({ name, profile_path, character, id }) => {
          // если есть данные (profile_path) фото актера то загружаем их, если нет, то загружаем постер,что данных нет
          const noPosterActor = profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : posterActor;

          return (
            <ul>
              <li key={id}>
                <img src={noPosterActor} alt="foto actor" className={css.img} />
                <h3 className={css.title_img}>{name}</h3>
                <p className={css.text_data}>Character:</p>
                <p className={css.text_data}>{character}</p>
              </li>
            </ul>
          );
        })}
      {isLoading && <Loader />}

      {error && <p>{error}</p>}
    </>
  );
};

export default Cast;
