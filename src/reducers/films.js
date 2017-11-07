import { GET_FILMS } from '../actions/constans';

const initialState = {
  results: [],
};

const films = (state = initialState, action) => (
  (action.type === GET_FILMS) ? {
    ...state,
    ...action.results,
  } : state
);

export default films;
