const URL = 'https://api.themoviedb.org/3/';

export const fetchFilms = (query, typeOfQuery) => (
  fetch(`${URL}search/${typeOfQuery}?api_key=da833af6d87a8331c27ee63a7fced1b1&query=${query}`).then(res => res.json())
);

export const fetchFilmDetails = (typeOfQuery, id) => (
  fetch(`${URL}${typeOfQuery}/${id}?api_key=da833af6d87a8331c27ee63a7fced1b1`).then(res => res.json())
);
