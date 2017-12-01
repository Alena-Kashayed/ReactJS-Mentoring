import { GET_FILMS, GET_CURRENT_FILM, CLEAR_CURRENT_FILM } from './constans';
import { fetchFilms, fetchFilmDetails } from '../Api';
import { startLoading, stopLoading } from '../actions';

export const getFilms = (query, typeOfQuery) => (dispatch) => {
  dispatch(startLoading);
  fetchFilms(query, typeOfQuery)
    .then((results) => {
      dispatch({
        type: GET_FILMS,
        results,
      });
      dispatch(stopLoading);
    });
};

export const getCurrentFilm = (typeOfQuery, id) => (dispatch) => {
  dispatch(startLoading);
  fetchFilmDetails(typeOfQuery, id)
    .then((currentFilm) => {
      dispatch({
        type: GET_CURRENT_FILM,
        currentFilm,
      });
      dispatch(stopLoading);
    });
};

export const clearCurrentFilm = {
  type: CLEAR_CURRENT_FILM,
  currentFilm: {},
};
