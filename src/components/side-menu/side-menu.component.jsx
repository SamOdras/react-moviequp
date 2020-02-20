import React from "react";
import "./side-menu.styles.scss";
import { Typography, Icon, ButtonBase, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Dashboard, FavoriteBorder } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTotalFavorite } from '../../redux/favorite/favorite.selector';
import { useTranslation } from "react-i18next";
const SideMenu = (props) => {
  const { history, totalFavorite } = props;
  const { t } = useTranslation();
  const renderButton = () => {
    return (
      <ButtonBase
        onClick={signOut}
        disableRipple={true}
        className="side-menu--item"
      >
        <Icon className="side-menu--item__icon">exit_to_app</Icon>
        <Typography variant="h5" className="side-menu--item__title">
          {t('Logout.1')}
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
            {t('Home.1')}
          </Typography>
        </ButtonBase>
      </Link>
      <Link to="/movie/favorite" style={{ textDecoration: "none" }}>
        <ButtonBase
          disableRipple={true}
          className={`side-menu--item ${
            history.location.pathname === "/movie/favorite" ? "active" : ""
          }`}
        >
          <Badge badgeContent={totalFavorite} color="secondary">
            <FavoriteBorder className="side-menu--item__icon" />
          </Badge>
          <Typography variant="h5" className="side-menu--item__title">
            {t('Favorite.1')}
          </Typography>
        </ButtonBase>
      </Link>
      {renderButton()}
    </div>
  );
};

const HOC = withRouter(SideMenu);
const mapStateToProps = createStructuredSelector({
  totalFavorite: selectTotalFavorite
})
export default connect(mapStateToProps)(HOC);
