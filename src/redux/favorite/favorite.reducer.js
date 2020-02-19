import Types from './favorite.types';
import { toogleItemToFavorite, checkItemFavorite } from './favorite.utils';

const INITIAL_STATE = {
  favoriteItem: [],
  checkItem : false,
};

const favoriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.TOGGLE_ITEM:
      return {
        ...state,
        favoriteItem: toogleItemToFavorite(state.favoriteItem, action.payload),
        checkItem: checkItemFavorite(state.favoriteItem, action.payload),
      }
    default:
      return state;
  }
};

export default favoriteReducer;
