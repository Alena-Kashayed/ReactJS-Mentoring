import { GET_CURRENT_FILM, CLEAR_CURRENT_FILM } from '../actions/constans';

const currentFilm = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_FILM:
      return {
        ...action.currentFilm,
      };
    case CLEAR_CURRENT_FILM:
      return {};
    default:
      return state;
  }
};

export default currentFilm;
