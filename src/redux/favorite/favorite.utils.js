export const toogleItemToFavorite = (favoriteItem, favoriteItemToAdd) => {
  const checkItem = favoriteItem.find(item => item.id === favoriteItemToAdd.id);
  if(checkItem){
    return favoriteItem.filter(item => item.id !== favoriteItemToAdd.id);
  }
  return [...favoriteItem, {...favoriteItemToAdd}];
}

export const checkItemFavorite = (favoriteItemId, incomingFavoriteId) => {
  const checkItem = favoriteItemId.find(item => item.id === incomingFavoriteId.id);
  if(!checkItem) return true;
  return false;
}