import React from "react";
import Frame from "../../components/frame/frame.component";
import DetailsComponent from "../../components/movie-details/movie-details.container";
import { connect } from "react-redux";
import { getMovieDetails } from "../../redux/movie/movie.actions";

const MovieDetails = ({ match ,getDetails }) => {
  React.useEffect(() => {
    getDetails(match.params.movieId);
  }, [getDetails, match])
  
  return (
    <Frame>
      <DetailsComponent />
    </Frame>
  );
};

const mapDispatchToProps = dispatch => ({
  getDetails : movieId => dispatch(getMovieDetails(movieId))
})
export default connect(null, mapDispatchToProps)(MovieDetails);
