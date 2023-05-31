import { Link } from 'react-router-dom';
import css from './Films.module.css';

export const Films = ({ popularFilms }) => {
  return (
    <ul className={css.film_title}>
      {popularFilms.map(({ id, title }) => {
        return (
          <Link to={`/movies/${id}`} key={id} id={id}>
            {title}
          </Link>
        );
      })}
    </ul>
  );
};
