import React from "react";
import "./favorite-view.styles.scss";
import FavoriteItem from "../favorite-item/favorite-item.component";
import { connect } from "react-redux";
import { toogleItem } from "../../redux/favorite/favorite.actions";

const FavoriteView = ({ listFavorite, toogleFavorite }) => {
  return (
    <div className="favorite-list-container">
      {listFavorite.map(item => {
        return (
          <FavoriteItem
            key={item.id}
            title={item.title}
            toogleFavorite={toogleFavorite}
            image={item.image}
            dataId={item.id}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = state => ({
  listFavorite: state.favorite.favoriteItem
});
const mapDispatchToProps = dispatch => ({
  toogleFavorite: item => dispatch(toogleItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteView);
