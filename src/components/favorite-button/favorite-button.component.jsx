import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";


class FavoriteButton extends React.PureComponent  {

  handleCheck = (e) => {
    this.props.handleFavorite(e.target.checked);
  }
  render(){
    const {  className, color, checkData } = this.props;
    return (
      <FormControlLabel
      style={{ justifyContent:'flex-end'}}
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


export default FavoriteButton;
