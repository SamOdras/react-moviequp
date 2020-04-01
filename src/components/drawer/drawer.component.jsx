import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import { Dashboard, FavoriteBorder, ExitToApp, Menu } from "@material-ui/icons";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTotalFavorite } from "../../redux/favorite/favorite.selector";
import { useTranslation } from "react-i18next";
import { logoutMovie } from "../../redux/auth/auth.actions";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const TemporaryDrawer = ({ history, logoutMovie, totalFavorite }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const { t } = useTranslation();
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const movePage = route => {
    history.push(route);
  };
  const signOut = () => {
    logoutMovie();
    history.push("/login");
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem
          className={`${history.location.pathname === "/" ? "active" : ""}`}
          button
          onClick={() => movePage("/")}
        >
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            style={{ textDecoration: "none" }}
            primary={t("Home.1")}
          />
        </ListItem>
        <ListItem
          className={`${
            history.location.pathname === "/movie/favorite" ? "active" : ""
          }`}
          button
          onClick={() => movePage("/movie/favorite")}
        >
          <ListItemIcon>
            <Badge badgeContent={totalFavorite} color="secondary">
              <FavoriteBorder />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={t("Favorite.1")} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer("left", true)}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <Menu />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
};

const HOC = withRouter(TemporaryDrawer);
const mapStateToProps = createStructuredSelector({
  totalFavorite: selectTotalFavorite
});
export default connect(mapStateToProps, { logoutMovie })(HOC);
