import { sortBy } from '../../src/reducers';
import { RATING, RELEASE_DAY } from '../../src/actions/constans';

describe('sortBy', () => {
  it('should handle initial state', () => {
    expect(sortBy(undefined, {
      sortBy: '',
    })).toEqual({
      value: '',
    });
  });
  it('should handle RELEASE_DAY', () => {
    expect(sortBy({}, {
      type: RELEASE_DAY,
      sortBy: 'releaseDay',
    })).toEqual({
      value: 'releaseDay',
    });
  });
  it('should handle RATING', () => {
    expect(sortBy({}, {
      type: RATING,
      sortBy: 'rating',
    })).toEqual({
      value: 'rating',
    });
  });
});
