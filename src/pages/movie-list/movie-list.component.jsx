import React, { lazy, Suspense } from "react";
import Frame from "../../components/frame/frame.component";
import Spinner from '../../components/spinner/spinner.component';

import { Route } from "react-router-dom";
import { getMovie } from "../../redux/movie/movie.actions";
import { connect } from "react-redux";

const MovieListView = lazy(() => import('../../components/list-view/list-view.container'));
const MovieList = ({ match, fetchMovieStart }) => {
  React.useEffect(() => {
    fetchMovieStart();
  }, [fetchMovieStart]);
  return (
    <Frame>
      <Suspense fallback={<Spinner/>}>
      <Route path={`${match.path}`} exact component={MovieListView} />
      </Suspense>
    </Frame>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchMovieStart: () => dispatch(getMovie())
});

export default connect(null, mapDispatchToProps)(MovieList);
