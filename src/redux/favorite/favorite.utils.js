export const toogleItemToFavorite = (favoriteItem, favoriteItemToAdd) => {
  const checkItem = favoriteItem.some(item => item.id === favoriteItemToAdd.id);
  if(!checkItem){
    return [...favoriteItem, favoriteItemToAdd]
  };
  return favoriteItem.filter(item => item.id !== favoriteItemToAdd.id);
}

export const checkItemFavorite = (favoriteItem, favoriteItemToAdd) => {
  const checkItem = favoriteItem.some(item => item.id === favoriteItemToAdd);
  return checkItem;
}