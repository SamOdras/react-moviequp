import React from "react";
import Frame from "../../components/frame/frame.component";
import MovieListView from "../../components/list-view/list-view.container";
import MovieDetails from "../../components/movie-details/movie-details.component";

import { Route } from "react-router-dom";
import { getMovie } from "../../redux/movie/movie.actions";
import { connect } from "react-redux";

const MovieList = ({ match, fetchMovieStart }) => {
  React.useEffect(() => {
    fetchMovieStart();
  }, [fetchMovieStart]);
  return (
    <Frame>
      <Route path={`${match.path}`} exact component={MovieListView} />
      <Route
        path={`${match.path}/movie/details/:movieId`}
        exact
        component={MovieDetails}
      />
    </Frame>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchMovieStart: () => dispatch(getMovie())
});
export default connect(null, mapDispatchToProps)(MovieList);
