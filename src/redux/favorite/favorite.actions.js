import Types from './favorite.types';

export const toogleItem = item => ({
  type: Types.TOGGLE_ITEM,
  payload: item,
});

export const checkItem = id => ({
  type: Types.CHECK_ITEM,
  payload: id,
});

export const checkSwitch = state => ({
  type: Types.CHECK_SWITCH,
  payload: state,
})