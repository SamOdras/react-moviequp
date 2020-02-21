import { createSelector } from 'reselect';

const selectFavorite = state => state.favorite;

export const selectFavoriteItem = createSelector(
  [selectFavorite],
  favorite => favorite.favoriteItem,
);
export const selectCheckedFavorite = createSelector(
  [selectFavoriteItem],
  favorite => {
    const check = favorite.filter(item => item.id);
    if(check.length) return true;
    return false
  }
);

export const selectTotalFavorite = createSelector(
  [selectFavoriteItem],
  favorite => favorite.length
);