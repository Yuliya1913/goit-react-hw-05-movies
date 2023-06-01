import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { themoviedbApiInfoFilm } from 'service/themoviedb';

export const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [infoData, setInfoData] = useState(null);
  console.log(infoData);
  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);

        const data = await themoviedbApiInfoFilm(movieId);
        //Если нет пришедших данных-выходим
        if (!data) return;

        setInfoData(data);
      } catch (error) {
        setError('Что-то пошло не так');
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {infoData &&
        infoData.map(({ author, content }) => {
          return (
            <div>
              <h3>{author}</h3>
              <p>{content}</p>
            </div>
          );
        })}
      <div></div>
      {isLoading && <Loader />}

      {error && <p>{error}</p>}
    </>
  );
};
