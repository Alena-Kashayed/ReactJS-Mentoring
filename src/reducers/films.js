import { GET_FILMS } from '../actions/constans';

const initialState = {
  results: [],
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...action.results,
      };
    default:
      return state;
  }
};

export default films;
