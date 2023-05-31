import { Form } from 'react-router-dom';
// import { themoviedbGetFilm } from 'service/themoviedb';

const Movies = () => {
  return <Form />;
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
