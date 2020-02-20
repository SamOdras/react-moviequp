import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovieCollections = createSelector(
  [selectMovie],
  movie => movie.collections
);
export const getLimitMovieItem = createSelector(
  [selectMovie],
  movie =>  movie.totalMovie
)
export const getSearchKeyword = createSelector(
  [selectMovie],
  movie => movie.searchKeyword
);
export const selectMovieDetails = createSelector(
  [selectMovie],
  movie => movie.collectionDetail
)
export const selectOnFetching = createSelector(
  [selectMovie],
  movie => movie.isFetching
);