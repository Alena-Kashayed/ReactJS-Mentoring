import { currentFilm } from '../../src/reducers';
import { GET_CURRENT_FILM, CLEAR_CURRENT_FILM } from '../../src/actions/constans';

describe('currentFilm', () => {
  it('should handle initial state', () => {
    expect(currentFilm(undefined, {})).toEqual({});
  });
  it('should handle GET_CURRENT_FILM', () => {
    expect(currentFilm({}, {
      type: GET_CURRENT_FILM,
      currentFilm: {
        id: 1,
      },
    })).toEqual({
      id: 1,
    });
  });
  it('should handle CLEAR_CURRENT_FILM', () => {
    expect(currentFilm({}, {
      type: CLEAR_CURRENT_FILM,
      currentFilm: {},
    })).toEqual({});
  });
});
