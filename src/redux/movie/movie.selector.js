import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovieCollections = createSelector(
  [selectMovie],
  movie => movie.collections
);

export const selectOnFetching = createSelector(
  [selectMovie],
  movie => movie.isFetching
);