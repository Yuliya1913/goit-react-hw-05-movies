import { useSearchParams } from 'react-router-dom';
import css from './Form.module.css';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = e.target.name.value;
    const query = inputValue.toLowerCase().trim();
    if (!query) {
      return;
    }
    setSearchParams({ query });
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>

        <input
          //   Записываем знaяения инпута в URL строку
          //   onChange={e => setSearchParams({ name: e.target.value })}
          // value={valueInput}
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

// {
/* 
      // const [searchParams, setSearchParams] = useSearchParams();

  // const handleSubmit = e => {
  //   console.log(e.target);
  //   e.preventDefault();
  //   //   находим данные введенные в инпут

  //   //   если в инпуте пустая строка, то выйти
  //   // if (valueInput === '') {
  //   //   alert('Введите данные для поиска');
  //   //   return;
  //   // }

  //   setSearchParamst(e.target.name.value);
  // };

  // return (
  //   <div>
  //     <form className={css.searchForm} onSubmit={handleSubmit}>
  //       <button type="submit" className={css.button}>
  //         <span className={css.label}>Search</span>
  //       </button>

  //       <input
  //         //   Записываем знaяения инпута в URL строку
  //         //   onChange={e => setSearchParams({ name: e.target.value })}
  //         //   value={valueInput}
  //         className={css.input}
  //         type="text"
  //         autocomplete="off"
  //         autofocus
  //         placeholder="Search images and photos"
  //         name="name"
  //       />
  //     </form>
  //   </div>
  // ); */
// }
