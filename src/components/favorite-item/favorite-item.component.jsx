import React from "react";
import "./favorite-item.styles.scss";
import Banner from "../../assets/Poster-1.jpg";

import { Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { toogleItem } from "../../redux/favorite/favorite.actions";
import FavoriteButton from '../favorite-button/favorite-button.component';

class FavoriteItem extends React.Component {
  handleClick = () => {
    const { toogleFavorite, dataId } = this.props;
    const data = {
      title: "Star Wars Battle Front",
      image: Banner,
      id: dataId
    };
    toogleFavorite(data);
  };
  render() {
    const { title, image } = this.props;
    return (
      <div className="movie-card">
        <img src={image || Banner} alt="" className="movie-card__banner" />
        <Typography className="movie-card__title">
          <span>{title || "Star Wars Battle Front"}</span>
          <FavoriteButton
            handleFavorite={this.handleClick}
          />
        </Typography>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toogleFavorite: item => dispatch(toogleItem(item))
})
export default connect(null, mapDispatchToProps)(FavoriteItem);
