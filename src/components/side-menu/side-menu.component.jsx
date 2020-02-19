import React from "react";
import "./side-menu.styles.scss";
import { Typography, Icon, ButtonBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Dashboard } from "@material-ui/icons";
import { withRouter } from 'react-router-dom';

const SideMenu =({ history })=> {
  const renderButton = () => {
    return (
      <ButtonBase
        onClick={signOut}
        disableRipple={true}
        className="side-menu--item"
      >
        <Icon className="side-menu--item__icon">exit_to_app</Icon>
        <Typography variant="h5" className="side-menu--item__title">
          Logout
        </Typography>
      </ButtonBase>
    );
  };
  const signOut = () => {
    history.push("/");
    window.location.reload();
  };
  return (
    <div className="side-menu">
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonBase
          disableRipple={true}
          className={`side-menu--item ${
            history.location.pathname === "/" ? "active" : ""
          }`}
        >
          <Dashboard className="side-menu--item__icon" />
          <Typography variant="h5" className="side-menu--item__title">
            Home
          </Typography>
        </ButtonBase>
      </Link>
      {renderButton()}
    </div>
  );
};

export default withRouter(SideMenu);
