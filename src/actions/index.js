import { SEARCH, SET_CURRENT_FILM, SORT_BY } from './constans';
import fetchFilms from '../Api';

export const getFilms = results => ({
  type: SEARCH,
  results,
});

export const getFilmList = (query, typeOfQuery, dispatch) => {
  fetchFilms(query, typeOfQuery)
    .then((results) => {
      dispatch(getFilms(results));
    });
};

export const setCurrentFilm = currentFilm => ({
  type: SET_CURRENT_FILM,
  currentFilm,
});

export const setSortBy = sortBy => ({
  type: SORT_BY,
  sortBy,
});
