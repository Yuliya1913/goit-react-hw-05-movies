import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>ghbndjfh</div>;
};
