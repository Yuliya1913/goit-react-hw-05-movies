import { useSearchParams } from 'react-router-dom';
import css from './Form.module.css';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  console.log(setSearchParams);

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.name.value.toLowerCase().trim();
    // console.log(query);

    if (!query) {
      return;
    }
    // Записываем значение из инпута в URL строку
    setSearchParams({ query: query });
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          name="name"
        />
      </form>
    </div>
  );
};
