import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>dfg</div>;
};
