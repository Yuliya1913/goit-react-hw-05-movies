import { Link, useLocation } from 'react-router-dom';
import css from './Films.module.css';
import PropTypes from 'prop-types';

export const Films = ({ popularFilms }) => {
  const location = useLocation();
  console.log(location);

  return (
    <ul className={css.film_title}>
      {popularFilms.map(({ id, title }) => {
        return (
          <Link
            className={css.text}
            to={`/movies/${id}`}
            key={id}
            id={id}
            state={{ from: location }}
          >
            {title}
          </Link>
        );
      })}
    </ul>
  );
};
Films.propTypes = {
  popularFilms: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
