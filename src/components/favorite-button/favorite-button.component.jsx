import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCheckedFavorite,
} from "../../redux/favorite/favorite.selector";

const FavoriteButton = props => {
  const { checked, handleFavorite, className, color } = props;
  return (
    <FormControlLabel
      style={{ marginLeft: "auto" }}
      className={className || ''}
      control={
        <Checkbox
          icon={<FavoriteBorder style={{ color: color || ''}} />}
          checkedIcon={<Favorite />}
          checked={checked}
          onClick={handleFavorite}
        />
      }
    />
  );
};
const mapStateToProps = createStructuredSelector({
  checked: selectCheckedFavorite
});
export default connect(mapStateToProps)(FavoriteButton);
