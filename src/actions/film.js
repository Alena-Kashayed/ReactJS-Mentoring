import { GET_FILMS, GET_CURRENT_FILM } from './constans';
import { fetchFilms, fetchFilmDetails } from '../Api';
import { startLoading } from '../actions';

export const getFilms = (query, typeOfQuery) => (dispatch) => {
  dispatch(startLoading(true));
  fetchFilms(query, typeOfQuery)
    .then((results) => {
      dispatch({
        type: GET_FILMS,
        results,
      });
      dispatch(startLoading(false));
    });
};

export const getCurrentFilm = (typeOfQuery, id) => (dispatch) => {
  dispatch(startLoading(true));
  fetchFilmDetails(typeOfQuery, id)
    .then((currentFilm) => {
      dispatch({
        type: GET_CURRENT_FILM,
        currentFilm,
      });
      dispatch(startLoading(false));
    });
};
