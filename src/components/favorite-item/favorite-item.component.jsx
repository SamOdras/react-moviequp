import React from "react";
import "./favorite-item.styles.scss";
import Banner from "../../assets/Poster-1.jpg";

import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { toogleItem } from "../../redux/favorite/favorite.actions";
import RemoveFavoriteButton from "../favorite-button/favorite-remove-button.component";

class FavoriteItem extends React.Component {
  handleClick = () => {
    const { dataId, toogleFavorite, title, image } = this.props;
    const data = {
      title,
      image,
      id: dataId
    };
    toogleFavorite(data);
  };

  render() {
    const { title, image, dataId } = this.props;
    const splitTitle = title.split(" ");
    return (
      <div className="movie-card">
        <Link
          to={`/movie/details/${dataId}`}
          style={{
            textDecoration: "none",
            width: "0%",
            padding: "0px",
            margin: "0px"
          }}
        >
          <img src={image || Banner} alt="" className="movie-card__banner" />
        </Link>
        <Typography className="movie-card__title">
          <span style={{ fontSize: "16px" }}>
            {`${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]} ...` ||
              "Star Wars Battle Front"}
          </span>
          <RemoveFavoriteButton
            style={{ marginLeft: "auto" }}
            handleClick={this.handleClick}
          />
        </Typography>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toogleFavorite: item => dispatch(toogleItem(item))
});
export default connect(null, mapDispatchToProps)(FavoriteItem);
