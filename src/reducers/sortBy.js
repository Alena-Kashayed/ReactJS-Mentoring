import { RATING, RELEASE_DAY } from '../actions/constans';

const initialState = {
  value: '',
};

const sort = (state = initialState, action) => {
  const { sortBy, type } = action;
  switch (type) {
    case RELEASE_DAY:
      return {
        value: sortBy,
      };
    case RATING:
      return {
        value: sortBy,
      };
    default:
      return state;
  }
};

export default sort;
