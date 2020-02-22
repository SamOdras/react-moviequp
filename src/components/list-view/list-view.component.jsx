import React from "react";
import "./list-view.styles.scss";
import ListItem from "../list-item/list-item.component";
import NoDataDisplay from "../no-data/no-data.component";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/spinner/spinner.component";

import { connect } from "react-redux";
import {
  selectMovieCollections,
  getLimitMovieItem
} from "../../redux/movie/movie.selector";

import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { getInfinteMovie } from "../../redux/movie/movie.actions";

class FavoriteView extends React.PureComponent {
  state = {
    hasMore: true,
    pagination: 1
  };
  renderNoData = () => {
    const { collections } = this.props;
    if (collections === undefined) return <NoDataDisplay />;
  };

  fetchMoreData = () => {
    const { collections, limitMovie, fetchInfiniteData, match } = this.props;
    if (collections.length >= limitMovie) this.setState({ hasMore: false });
    this.setState({ pagination: this.state.pagination + 1 });
    fetchInfiniteData(this.state.pagination, match.params.movieKeyword);
  };
  render() {
    const { collections } = this.props;
    console.log('RENDER LIST VIEW')
    return (
      <div>
        {collections && (
          <InfiniteScroll
            className="list-view-container"
            dataLength={collections.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<Spinner />}
            endMessage={
              <div className="end-text">
                <p>
                  <b>Yay! You have seen it all</b>
                </p>
              </div>
            }
          >
            {collections.map((data, key) => {
              return (
                <ListItem
                  key={key}
                  dataId={data.imdbID}
                  title={data.Title}
                  image={data.Poster}
                  {...this.props}
                />
              );
            })}
          </InfiniteScroll>
        )}

        {this.renderNoData()}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectMovieCollections,
  limitMovie: getLimitMovieItem
});
const mapDispatchToProps = dispatch => ({
  fetchInfiniteData: page => dispatch(getInfinteMovie(page))
});
const HOC = withRouter(FavoriteView);
export default connect(mapStateToProps, mapDispatchToProps)(HOC);
