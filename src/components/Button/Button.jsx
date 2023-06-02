import { Link } from 'react-router-dom';
import css from './Button.module.css';

export const Button = ({ path }) => {
  return (
    <>
      <Link to={path} className={css.button}>
        BACK
      </Link>
    </>
  );
};
