import { themoviedbGetFilm } from 'service/themoviedb';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Films } from 'components/Films/Films';
import { SearchForm } from 'components/Form/SearchForm';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [popularFilm, setpopularFilm] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const query = searchParams.get('query');
  console.log(query);
  useEffect(() => {
    if (!query) {
      return;
    }

    (async () => {
      try {
        setIsloading(true);
        const data = await themoviedbGetFilm(query);
        console.log(data);
        //   переберем массив и сoздадим новый с необходимыми свойствами
        const newResults = data.map(({ title, id, poster_path }) => {
          return { title, id, poster_path };
        });

        setpopularFilm([...newResults]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, [query]);

  return (
    <>
      <div>
        <SearchForm />
        {popularFilm.length > 0 && <Films popularFilms={popularFilm} />}
        {isloading && <Loader />}
      </div>
    </>
  );
};

export default Movies;

// import { useEffect, useState } from 'react';
// import { Form } from 'react-router-dom';
// import { themoviedbGetFilm } from 'service/themoviedb';

// const Movies = () => {
//   const [query, setQuery] = useState('');

//   //   const getQuery = valueInput => {
//   //     if (valueInput === query) {
//   //       alert('Введите новое значение для поиска');
//   //       return;
//   //     }
//   //     setQuery(valueInput);
//   //     console.log(valueInput);
//   //   };

//   useEffect(() => {
//     async function getFilm() {
//       try {
//         //    setIsLoading(true);

//         const data = await themoviedbGetFilm(query);
//         console.log(data);

//         //Если нет пришедших данных-выходим
//         // if (!results) return;

//         //   переберем массив и сoздадим новый с необходимыми свойствами
//         // const newResults = results.map(({ title, id, poster_path }) => {
//         //   return { title, id, poster_path };
//         // });

//         // setpopularFilm([...newResults]);
//       } catch (error) {
//         //    setError('Что-то пошло не так');
//       } finally {
//         //    setIsLoading(false);
//       }
//     }
//     getFilm();
//   }, [query]);

//   //    setImgData([]);
//   //    setPage(1);
//   //    setTotalImages(0);

//   return <Form />;
// };

//   const [searchParams, setSearchParams] = useSearchParams();
//   console.log(searchParams);

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(e.target.value);
//     //   находим данные введенные в инпут

//     //   если в инпуте пустая строка, то выйти
//     // if (valueInput === '') {
//     //   alert('Введите данные для поиска');
//     //   return;
//     // }

//     setSearchParams({ film: e.target.value });
//   };

//   return (
//     <div>
//       <form>
//         <button type="submit" onSubmit={handleSubmit}>
//           <span>Search</span>
//         </button>

//         <input
//           //   Записываем знaяения инпута в URL строку
//           //   onChange={e => setSearchParams({ name: e.target.value })}

//           type="text"
//           //   autocomplete="off"
//           //   autofocus
//           placeholder="Search images and photos"
//           name="name"
//         />
//       </form>
//     </div>
//   );
// };
