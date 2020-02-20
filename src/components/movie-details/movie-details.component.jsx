import React from "react";
import "./movie-details.styles.scss";
import { Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

import { toogleItem } from "../../redux/favorite/favorite.actions";
import { selectFavoriteItem } from "../../redux/favorite/favorite.selector";
import { selectMovieDetails } from "../../redux/movie/movie.selector";
import FavoriteButton from "../favorite-button/favorite-button.component";
class MovieDetails extends React.Component {
  state = {
    check: false
  };
  handleClick = state => {
    const { movieDetails, toogleFavorite, match } = this.props;
    const data = {
      title: movieDetails.Title,
      image: movieDetails.Poster,
      id: match.params.movieId
    };
    toogleFavorite(data);
    this.setState({ check: state });
  };
  componentDidMount() {
    this.checkingItem();
  }
  checkingItem = () => {
    const { collections, match } = this.props;
    const check = collections.some(item => item.id === match.params.movieId);
    this.setState({ check });
  };
  render() {
    const { movieDetails } = this.props;
    return (
      <div className="movie-details-container">
        {movieDetails && (
          <div className="header-container">
            <div className="banner-wrapper">
              <FavoriteButton
                handleFavorite={this.handleClick}
                className="header-container__icon-banner"
                color="white"
                checkData={this.state.check}
              />
              <img
                src={movieDetails.Poster}
                alt="Move Poster"
                className="header-container__banner"
              />
            </div>
            <div className="header-container__stats">
              <Typography className="stats-title" variant="h4">
                {movieDetails.Title}
              </Typography>
              <div className="stats-info">
                <Typography variant="body1">
                  <b>Release Date</b> : {movieDetails.Released}
                </Typography>
                <Typography variant="body1">
                  <b>Duration</b> : {movieDetails.Runtime}
                </Typography>
                <Typography variant="body1">
                  <b>Genre</b>: {movieDetails.Genre}
                </Typography>
                <Typography variant="body1">
                  <b>Language </b>: {movieDetails.Language}
                </Typography>
                <Typography variant="body1">
                  <b>Writer</b> : {movieDetails.Writer}
                </Typography>
              </div>
              <div className="stats-info">
                <Typography variant="body1">
                  <b>Actors</b> : {movieDetails.Actors}
                </Typography>
                <Typography variant="body1">
                  <b>Awards</b> : {movieDetails.Awards}
                </Typography>
              </div>
              <div className="stats-info">
                <Typography variant="body1">
                  <b>Plot</b> : {movieDetails.Plot}
                </Typography>
              </div>
              <div className="stats-score">
                {movieDetails.Ratings.map((item, key) => {
                  return (
                    <Typography
                      key={key}
                      variant="body1"
                      className="stats-score__rating"
                    >
                      <span>
                        <b>{item.Value || "No Rating"}</b>
                      </span>
                      <span>
                        {item.Source === "Internet Movie Database"
                          ? "IMD"
                          : item.Source}
                      </span>
                    </Typography>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const HOC = withRouter(MovieDetails);
const mapDispatchToProps = dispatch => ({
  toogleFavorite: item => dispatch(toogleItem(item))
});
const mapStateToProps = createStructuredSelector({
  movieDetails: selectMovieDetails,
  collections: selectFavoriteItem,
});
export default connect(mapStateToProps, mapDispatchToProps)(HOC);
