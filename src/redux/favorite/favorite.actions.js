import Types from './favorite.types';

export const toogleItem = item => ({
  type: Types.TOGGLE_ITEM,
  payload: item,
});