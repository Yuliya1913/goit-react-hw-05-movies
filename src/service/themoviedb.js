import axios from 'axios';

export const themoviedbApi = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ',
    },
  };

  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return response.data;
};

// запрос полной информации о фильме для страницы кинофильма.

export const themoviedbMoviesApiFilm = async homeId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ',
    },
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/{homeId}?language=en-US`,
    options
  );

  return response.data;
};

// поиск фильма введенного пользователем в инпут
export const themoviedbGetFilm = async query => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ',
    },
  };

  const response = await axios.get(
    (`https://api.themoviedb.org/3/search/movie?include_adult=${query}&language=en-US&page=1`,
    options)
  );

  return response.data;
};
