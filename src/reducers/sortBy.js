const initialState = {
  value: '',
};

const sortBy = (state = initialState, action) => {
  const sort = action.sortBy;
  switch (sort) {
    case 'releaseDay': {
      return {
        ...state,
        value: sort,
      };
    }
    case 'rating':
      return {
        ...state,
        value: sort,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sortBy;
