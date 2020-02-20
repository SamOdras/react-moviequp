import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovieCollections = createSelector(
  [selectMovie],
  movie => movie.collections
);
export const selectMovieDetails = createSelector(
  [selectMovie],
  movie => movie.collectionDetail
)
export const selectOnFetching = createSelector(
  [selectMovie],
  movie => movie.isFetching
);