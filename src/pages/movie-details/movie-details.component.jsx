import React from "react";
import Frame from "../../components/frame/frame.component";
import DetailsComponent from '../../components/movie-details/movie-details.component';

class MovieDetails extends React.Component {
  render() {
    return (
      <Frame>
        <DetailsComponent/>
      </Frame>
    );
  }
}

export default MovieDetails;
