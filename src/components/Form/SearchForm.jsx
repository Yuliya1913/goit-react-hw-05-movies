import { useSearchParams } from 'react-router-dom';
import css from './Form.module.css';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    // Находим значение из инпута
    const query = e.target.name.value.toLowerCase().trim();

    if (!query) {
      return;
    }
    // Записываем значение из инпута в URL строку
    setSearchParams({ query: query });
  };

  return (
    <div>
      <form className={css.search_form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          name="name"
        />
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>
      </form>
    </div>
  );
};
