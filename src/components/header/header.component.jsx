import React from "react";
import "./header.styles.scss";
import MenuIcon from "@material-ui/icons/Menu";

import {
  Typography,
  IconButton,
  Icon,
  useScrollTrigger,
  Toolbar,
  AppBar
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
const ElevationScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};
const Header = props => {
  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed" className="app-bar" elevation={1}>
          <Toolbar className="app-bar__toolbar">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div className="app-bar__title">
              <Typography
                color="inherit"
                variant="h6"
                style={{ cursor: "pointer" }}
              >
                MovieQup
              </Typography>
            </div>
            <div className="app-bar__search-field">
              <div className="banner-input">
                <IconButton className="banner-input__icon">
                  <Icon>search</Icon>
                </IconButton>
                <input
                  className="banner-input__field"
                  placeholder="Cari Movie"
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default withRouter(Header);
