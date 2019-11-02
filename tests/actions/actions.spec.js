import { setSortByReleaseDay, setSortByRating } from '../../src/actions';
import { RELEASE_DAY, RATING } from '../../src/actions/constans';

describe('setSortBy', () => {
  it('should create SORT_BY action by releaseDay', () => {
    expect(setSortByReleaseDay()).toEqual({
      type: RELEASE_DAY,
      sortBy: 'releaseDay',
    });
  });
  it('should create SORT_BY action by rating', () => {
    expect(setSortByRating()).toEqual({
      type: RATING,
      sortBy: 'rating',
    });
  });
});
