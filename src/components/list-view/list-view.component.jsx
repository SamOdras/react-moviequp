import React from "react";
import "./list-view.styles.scss";
import FavoriteItem from '../favorite-item/favorite-item.component';
import { connect } from 'react-redux';
import { toogleItem } from '../../redux/favorite/favorite.actions';

const FavoriteView = ({ toogleFavorite }) => {
  return (
    <div className="list-view-container">
      <FavoriteItem toogleFavorite={toogleFavorite} dataId="testId" />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toogleFavorite: item => dispatch(toogleItem(item))
})

export default connect(null, mapDispatchToProps)(FavoriteView);
