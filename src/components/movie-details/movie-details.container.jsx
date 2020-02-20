import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectOnFetching } from '../../redux/movie/movie.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import MovieDetailComponent from './movie-details.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectOnFetching
});

const MovieDetailContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(MovieDetailComponent);

export default MovieDetailContainer;