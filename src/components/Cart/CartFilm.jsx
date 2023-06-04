import css from './CartFilm.module.css';
import poster from 'image/no-poster-film.png';

export const CartFilm = ({ film }) => {
  const { title, overview, poster_path, release_date, vote_average } = film;

  // если есть изображение(poster_path) , то его загружаем его, если нет - загружаем постер
  const noPosret = poster_path
    ? `https://image.tmdb.org/t/p/w400${poster_path}`
    : poster;

  return (
    <div className={css.wrap}>
      <div>
        <img src={noPosret} alt={title} />
      </div>
      <div className={css.wrapdata}>
        <h2 className={css.title_film}>{title}</h2>
        <p className={css.text_film}>
          User count {(vote_average * 10).toFixed()}%
        </p>
        <p className={css.text_film}>{release_date.slice(0, 4)}</p>
        <h3 className={css.title_film}>overview</h3>
        <p className={css.text_film}>{overview}</p>
      </div>
    </div>
  );
};
