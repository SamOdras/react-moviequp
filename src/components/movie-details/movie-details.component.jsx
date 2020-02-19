import React from "react";
import "./movie-details.styles.scss";
import Banner from "../../assets/Poster-1.jpg";
import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

class MovieDetails extends React.Component {
  render() {
    return (
      <div className="movie-details-container">
        <div className="header-container">
          <div className="banner-wrapper">
            <FormControlLabel
              className="header-container__icon-banner"
              control={
                <Checkbox
                  icon={<FavoriteBorder style={{ color: "white" }} />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
            />
            <img
              src={Banner}
              alt="Move Poster"
              className="header-container__banner"
            />
          </div>
          <div className="header-container__stats">
            <Typography className="stats-title" variant="h4">
              Star Wars: Episode IV - A New Hope
            </Typography>
            <div className="stats-info">
              <Typography variant="body1">
                <b>Release Date</b> : 17 Agustus 1945
              </Typography>
              <Typography variant="body1">
                <b>Duration</b> : 120 Minute
              </Typography>
              <Typography variant="body1">
                <b>Genre</b>: Mature
              </Typography>
              <Typography variant="body1">
                <b>Language </b>: English
              </Typography>
              <Typography variant="body1">
                <b>Writer</b> : George Lucas
              </Typography>
            </div>
            <div className="stats-info">
              <Typography variant="body1">
                <b>Actors</b> : Mark Hamill, Harrison Ford, Carrie Fisher, Peter
                Cushing
              </Typography>
              <Typography variant="body1">
                <b>Awards</b> : Won 6 Oscars. Another 52 wins & 28 nominations.
              </Typography>
            </div>
            <div className="stats-info">
              <Typography variant="body1">
                <b>Plot</b> : Luke Skywalker joins forces with a Jedi Knight, a
                cocky pilot, a Wookiee and two droids to save the galaxy from
                the Empire's world-destroying battle station, while also
                attempting to rescue Princess Leia from the mysterious Darth
                Vader.
              </Typography>
            </div>
            <div className="stats-score">
              <Typography variant="body1" className="stats-score__rating">
                <span>
                  <b>90/100</b>
                </span>
                <span>Metacritic</span>
              </Typography>
              <Typography variant="body1" className="stats-score__rating">
                <span>
                  <b>93%</b>
                </span>
                <span>Rotten Tomatoes</span>
              </Typography>
              <Typography variant="body1" className="stats-score__rating">
                <span>
                  <b>8.6/10</b>
                </span>
                <span>IMD</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
