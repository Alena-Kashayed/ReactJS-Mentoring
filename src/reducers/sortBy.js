const sortBy = (state, action) => {
  const sort = action.sortBy;
  switch (sort) {
    case 'releaseDay':
      return {
        ...state,
      };
    case 'rating':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default sortBy;
