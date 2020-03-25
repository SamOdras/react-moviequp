import React from "react";
import "./header.styles.scss";
import { useTranslation } from "react-i18next";
import {
  Typography,
  IconButton,
  Icon,
  useScrollTrigger,
  Toolbar,
  AppBar
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import SwitchLanguage from "../switch-language/switch-language.component";
import Drawer from "../drawer/drawer.component";

const ElevationScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 1
  });
};
const Header = ({ history }) => {
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/movie/search/${searchKeyword}`);
    // window.location.reload();
  };
  const handleChange = e => {
    setSearchKeyword(e.target.value);
  };
  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed" className="app-bar" elevation={10}>
          <Toolbar className="app-bar__toolbar">
            <Drawer />
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
              <form action="">
                <div className="banner-input">
                  <IconButton
                    onClick={handleSubmit}
                    type="submit"
                    className="banner-input__icon"
                  >
                    <Icon>search</Icon>
                  </IconButton>
                  <input
                    className="banner-input__field"
                    placeholder={t("Search Movie.1")}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="app-bar__switch-language">
              <SwitchLanguage />
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};
const HOC = withRouter(Header);
export default HOC;
