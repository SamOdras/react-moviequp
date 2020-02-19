import React from "react";
import "./favorite-item.styles.scss";
import Banner from '../../assets/Poster-1.jpg';
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';

const FavoriteItem = props => {
  return (
    <div className="movie-card">
      <img src={Banner} alt="" className="movie-card__banner" />
      <Typography className="movie-card__title">
        <span>Star Wars Battle Front</span>
        <FormControlLabel
          style={{ marginLeft: "auto" }}
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value="checkedH"
            />
          }
        />
      </Typography>
    </div>
  );
};

export default FavoriteItem;
