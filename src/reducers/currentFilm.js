const current = (state, action) => ({
  ...state,
  ...action.currentFilm,
});

export default current;
