import React from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import { Error, Close } from "@material-ui/icons";
import { connect } from 'react-redux';
import { closeError } from '../../redux/auth/auth.actions';


const SnackbarComponent = ({ closeError, isError, message }) => {
  setTimeout(() => {
    closeError();
  }, 7000);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isError}
    >
      <SnackbarContent
        message={
          <span
            id="client-snackbar"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Error />
            <span style={{ marginLeft: "20px", fontSize: 17 }}>{message}</span>
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={closeError}>
            <Close />
          </IconButton>
        ]}
        style={{ backgroundColor: "#D32F2F" }}
      />
    </Snackbar>
  );
};
export default connect(null, { closeError })(SnackbarComponent);
