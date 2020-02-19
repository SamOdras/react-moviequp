import React from "react";
import "./favorite-view.styles.scss";
import FavoriteItem from '../favorite-item/favorite-item.component';

const FavoriteView = props => {
  return (
    <div className="movie-list-container">
      <FavoriteItem/>
    </div>
  );
};

export default FavoriteView;
