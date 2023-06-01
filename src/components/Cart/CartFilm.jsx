export const CartFilm = ({ film }) => {
  console.log(film);
  const { title, overview, poster_path, release_date, vote_average } = film;

  return (
    <>
      <img src={`https:/image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
      <h2>{title}</h2>
      <p>User count {(vote_average * 10).toFixed()}%</p>
      <p>{release_date.slice(0, 4)}</p>
      <h3>overview</h3>
      <p>{overview}</p>
      <p>Additional information</p>
    </>
  );
};
