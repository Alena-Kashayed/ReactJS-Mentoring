const URL = 'https://api.themoviedb.org/3/';
const apiKey = 'da833af6d87a8331c27ee63a7fced1b1';

export const fetchFilms = async (query, typeOfQuery) => {
  const response = await fetch(`${URL}search/${typeOfQuery}?api_key=${apiKey}&query=${query}`);
  const data = await response.json();
  return data;
};

export const fetchFilmDetails = async (typeOfQuery, id) => {
  const response = await fetch(`${URL}${typeOfQuery}/${id}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};
