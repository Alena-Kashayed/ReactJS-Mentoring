const films = (state, action) => ({
  ...state,
  ...action.results,
});

export default films;
