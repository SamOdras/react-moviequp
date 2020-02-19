import React from "react";
import Frame from "../../components/frame/frame.component";
import "./movie-list.styles.scss";
import Banner from '../../assets/Poster-1.jpg'
import { Typography } from "@material-ui/core";
const MovieList = props => {
  return (
    <Frame>
      <div className="movie-list-container">
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
        <div className="movie-card">
          <img src={Banner} alt="" className="movie-card__banner"/>
          <Typography className="movie-card__title">Star Wars Battle Front</Typography>
        </div>
      </div>
    </Frame>
  );
};

export default MovieList;
