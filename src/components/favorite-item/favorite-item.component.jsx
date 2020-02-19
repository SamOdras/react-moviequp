import React from "react";
import "./favorite-item.styles.scss";
import Banner from '../../assets/Poster-1.jpg';
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { connect } from 'react-redux';

class FavoriteItem extends React.Component {
  handleClick = () => {
    const { toogleFavorite, dataId } = this.props;
    const data = {
      title: 'Star Wars Battle Front',
      image: Banner,
      id: dataId
    }
    toogleFavorite(data);
  }
  render(){
    const { checked, title, image } = this.props;
    return (
      <div className="movie-card">
        <img src={image || Banner} alt="" className="movie-card__banner" />
        <Typography className="movie-card__title">
          <span>{title || 'Star Wars Battle Front'}</span>
          <FormControlLabel
            style={{ marginLeft: "auto" }}
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={checked}
                onClick={this.handleClick}
              />
            }
          />
        </Typography>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  favoriteItem: state.favorite.favoriteItem,
  checked: state.favorite.checkItem,
});
export default connect(mapStateToProps)(FavoriteItem);
