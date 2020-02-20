import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectOnFetching } from '../../redux/movie/movie.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import ListViewComponent from './list-view.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectOnFetching
});

const ListViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ListViewComponent);

export default ListViewContainer;