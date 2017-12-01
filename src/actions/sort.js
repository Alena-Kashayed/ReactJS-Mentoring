import { RELEASE_DAY, RATING } from './constans';

export const setSortByReleaseDay = () => ({
  type: RELEASE_DAY,
  sortBy: 'releaseDay',
});

export const setSortByRating = () => ({
  type: RATING,
  sortBy: 'rating',
});
