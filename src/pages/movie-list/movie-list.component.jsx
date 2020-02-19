import React from "react";
import Frame from "../../components/frame/frame.component";
import MovieListView from '../../components/list-view/list-view.component';

const MovieList = props => {
  return (
    <Frame>
      <MovieListView/>
    </Frame>
  );
};

export default MovieList;
