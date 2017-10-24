const initialState = {
  query: '',
  typeOfQuery: 'movie',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH': {
      const { results } = action;
      return { ...state, results };
    }
    case 'SET_CURRENT_FILM': {
      const { currentFilm } = action;
      return { ...state, currentFilm };
    }
    default:
      return state;
  }
};
