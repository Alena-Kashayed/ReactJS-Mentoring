const initialState = {
  value: '',
};

const sortBy = (state = initialState, action) => {
  const sort = action.sortBy;
  switch (sort) {
    case 'releaseDay':
      return {
        value: sort,
      };
    case 'rating':
      return {
        value: sort,
      };
    default:
      return state;
  }
};

export default sortBy;
