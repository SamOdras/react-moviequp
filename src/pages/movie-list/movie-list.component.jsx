import React from "react";
import Frame from "../../components/frame/frame.component";
import MovieListView from '../../components/favorite-view/favorite-view.component';

const MovieList = props => {
  return (
    <Frame>
      <MovieListView/>
    </Frame>
  );
};

export default MovieList;
