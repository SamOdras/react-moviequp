import React from "react";
import "./favorite-view.styles.scss";
import FavoriteItem from "../favorite-item/favorite-item.component";
import NoDataDisplay from '../no-data/no-data.component';

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectFavoriteItem } from "../../redux/favorite/favorite.selector";

const FavoriteView = ({ listFavorite }) => {
  const noDataDisplay = () => {
    if(listFavorite.length === 0){
      return <NoDataDisplay/>
    }
  }
  return (
    <div className="favorite-list-container">
      {listFavorite &&
        listFavorite.map((item, key) => {
          return (
            <FavoriteItem
              key={key}
              title={item.title}
              image={item.image}
              dataId={item.id}
            />
          );
        })}
        {noDataDisplay()}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  listFavorite: selectFavoriteItem
});
export default connect(mapStateToProps)(FavoriteView);
