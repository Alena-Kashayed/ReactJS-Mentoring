export const getFilms = results => ({
  type: 'SEARCH',
  results,
});

export const fetchFilms = (query, typeOfQuery) => ((dispatch) => {
  const URL = `https://api.themoviedb.org/3/search/${typeOfQuery}?api_key=da833af6d87a8331c27ee63a7fced1b1&query=${query}`;
  return fetch(URL)
    .then(response => response.json())
    .then(results => dispatch(getFilms(results, query, typeOfQuery)));
});

export const setCurrentFilm = currentFilm => ({
  type: 'SET_CURRENT_FILM',
  currentFilm,
});
