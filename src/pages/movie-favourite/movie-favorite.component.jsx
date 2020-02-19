import React from "react";
import Frame from "../../components/frame/frame.component";
// import "./movie-list.styles.scss";
import Banner from "../../assets/Poster-1.jpg";
import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const MovieList = props => {
  return (
    <Frame>
      <div className="movie-list-container">
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
      </div>
    </Frame>
  );
};

export default MovieList;
