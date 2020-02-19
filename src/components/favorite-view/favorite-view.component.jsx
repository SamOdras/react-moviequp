import React from "react";
import "./favorite-view.styles.scss";
import FavoriteItem from "../favorite-item/favorite-item.component";
import { connect } from "react-redux";

import { createStructuredSelector } from 'reselect';
import { selectFavoriteItem } from '../../redux/favorite/favorite.selector';

const FavoriteView = ({ listFavorite }) => {
  return (
    <div className="favorite-list-container">
      {listFavorite.map(item => {
        return (
          <FavoriteItem
            key={item.id}
            title={item.title}
            image={item.image}
            dataId={item.id}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  listFavorite: selectFavoriteItem
})
export default connect(mapStateToProps)(FavoriteView);
