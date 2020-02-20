import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectFavoriteItem
} from "../../redux/favorite/favorite.selector";

class FavoriteButton extends React.Component  {

  handleCheck = (e) => {
    this.props.handleFavorite(e.target.checked);
  }

  render(){
    const {  className, color, checkData } = this.props;
    console.log('RENDERING');
    return (
      <FormControlLabel
        style={{ marginLeft: "auto" }}
        className={className || ''}
        control={
          <Checkbox
            icon={<FavoriteBorder style={{ color: color || ''}} />}
            checkedIcon={<Favorite />}
            checked={checkData}
            onClick={this.handleCheck}
          />
        }
      />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  collections: selectFavoriteItem,
});

export default connect(mapStateToProps)(FavoriteButton);
