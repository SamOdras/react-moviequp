import React from "react";
import "./list-item.styles.scss";
import Banner from "../../assets/Poster-1.jpg";

import { Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteButton from "../favorite-button/favorite-button.component";
import { toogleItem } from "../../redux/favorite/favorite.actions";
import { createStructuredSelector } from "reselect";
import { selectFavoriteItem } from "../../redux/favorite/favorite.selector";

class FavoriteItem extends React.Component {
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
    const { collections, dataId } = this.props;
    const check = collections.some(item => item.id === dataId);
    this.setState({ check });
  };
  render() {
    const { title, image, dataId } = this.props;
    const splitTitle = title.split(" ");
    return (
      <div className={image.length < 50 ? 'skip-card' : 'movie-card'}>
        <Link to={`/movie/details/${dataId}`} style={{textDecoration: 'none',width:'0%', padding:'0px', margin:'0px' }}>
        <img
          src={image || Banner}
          alt=""
          className="movie-card__banner"
        />
        </Link>
        <Typography className="movie-card__title">
          <span style={{ fontSize: "16px" }}>
            {`${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2] === undefined ? '' : splitTitle[2]}......` ||
              "Star Wars Battle Front"}
          </span>
          <FavoriteButton
            handleFavorite={this.handleClick}
            id={dataId}
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
const mapStateToProps = createStructuredSelector({
  collections: selectFavoriteItem
});
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItem);
