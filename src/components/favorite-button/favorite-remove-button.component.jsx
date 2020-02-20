import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const RemoveFavorite = ({ handleClick, style }) => {
  return (
    <React.Fragment>
      <IconButton onClick={handleClick} style={style}>
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default RemoveFavorite;