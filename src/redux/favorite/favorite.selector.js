import { createSelector } from 'reselect';

const selectFavorite = state => state.favorite;

export const selectCheckedFavorite = createSelector(
  [selectFavorite],
  favorite => favorite.checkItem
);

export const selectFavoriteItem = createSelector(
  [selectFavorite],
  favorite => favorite.favoriteItem,
);

export const selectTotalFavorite = createSelector(
  [selectFavoriteItem],
  favorite => favorite.length
);