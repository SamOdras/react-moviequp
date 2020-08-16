import React from "react";
import "./list-item.styles.scss";

import { Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteButton from "../favorite-button/favorite-button.component";
import { toogleItem } from "../../redux/favorite/favorite.actions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class FavoriteItem extends React.PureComponent {
  state = {
    check: false
  };
  handleClick = state => {
    const { toogleFavorite, dataId, title, image } = this.props;
    const data = {
      title: title,
      image: image,
      id: dataId
    };
    toogleFavorite(data);
    this.setState({ check: state });
  };
  componentDidMount() {
    this.checkingItem();
  }
  checkingItem = () => {
    const { favouriteMovie, dataId } = this.props;
    const check = favouriteMovie.some(item => item.id === dataId);
    this.setState({ check });
  };
  render() {
    const { title, image, dataId } = this.props;
    const splitTitle = title.split(" ");
    return (
      <div className={image.length < 50 ? "skip-card" : "movie-card"}>
        <Link
          to={`/movie/details/${dataId}`}
          style={{
            textDecoration: "none",
            width: "0%",
            padding: "0px",
            margin: "0px"
          }}
        >
          <LazyLoadImage
            alt="My Image"
            src={image}
            className="movie-card__banner"
            effect="blur"
          />
        </Link>
        <Typography className="movie-card__title">
          <span>
            {`${splitTitle[0]} ${splitTitle[1]} ${
              splitTitle[2] === undefined ? "" : splitTitle[2]
            }......` || "Star Wars Battle Front"}
          </span>
          <FavoriteButton
            handleFavorite={this.handleClick}
            checkData={this.state.check}
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
