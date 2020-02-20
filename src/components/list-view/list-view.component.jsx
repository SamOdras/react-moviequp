import React from "react";
import "./list-view.styles.scss";
import ListItem from "../list-item/list-item.component";
import { connect } from "react-redux";
import { selectMovieCollections } from "../../redux/movie/movie.selector";
import { createStructuredSelector } from "reselect";

const FavoriteView = ({ collections }) => {
  return (
    <div className="list-view-container">
      {collections &&
        collections.map((data,key) => {
          return (
            <ListItem
              key={key}
              dataId={data.imdbID}
              title={data.Title}
              image={data.Poster}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectMovieCollections
});

export default connect(mapStateToProps)(FavoriteView);
