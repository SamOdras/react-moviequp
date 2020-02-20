import React from "react";
import Frame from "../../components/frame/frame.component";
import MovieListView from "../../components/list-view/list-view.container";


import { searchMovieList } from "../../redux/movie/movie.actions";
import { connect } from "react-redux";


const MovieListSearch = ({ match, fetchSearchMovieStart }) => {
  React.useEffect(() => {
    fetchSearchMovieStart(match.params.movieKeyword);
  }, [fetchSearchMovieStart, match]);
  return (
    <Frame>
      <MovieListView/>
    </Frame>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchSearchMovieStart: keyword => dispatch(searchMovieList(keyword))
});

export default connect(null, mapDispatchToProps)(MovieListSearch);
