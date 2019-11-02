import { films } from '../../src/reducers';
import { GET_FILMS } from '../../src/actions/constans';

describe('films', () => {
  it('should handle initial state', () => {
    expect(films(undefined, {
      results: [],
    })).toEqual({
      results: [],
    });
  });
  it('should handle GET_FILMS', () => {
    expect(films({}, {
      type: GET_FILMS,
      films: {},
    })).toEqual({});
  });
});
