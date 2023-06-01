import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { themoviedbApiActorFilm } from 'service/themoviedb';

export const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [actorData, setActorData] = useState(null);

  console.log(actorData);
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
        actorData.map(({ name, profile_path, character }) => {
          return (
            <div>
              <img
                src={`https:/image.tmdb.org/t/p/w200/${profile_path}`}
                alt=""
              />
              <h3>{name}</h3>
              <p>Character:</p>
              <p>{character}</p>
            </div>
          );
        })}
      {isLoading && <Loader />}

      {error && <p>{error}</p>}
    </>
  );
};
