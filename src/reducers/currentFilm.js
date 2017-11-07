import { GET_CURRENT_FILM } from '../actions/constans';

const current = (state = {}, action) => (
  (action.type === GET_CURRENT_FILM) ? {
    ...state,
    ...action.currentFilm,
  } : state
);

export default current;
