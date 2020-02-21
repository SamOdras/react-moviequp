import React from "react";
import NotFound from "../../assets/not-found.png";
import { Typography } from "@material-ui/core";
import "./error-notfound.styles.scss";
import { useTranslation } from "react-i18next";
import Frame from "../frame/frame.component";

const PageNotFoundDisplay = () => {
  const { t } = useTranslation();
  return (
    <Frame>
      <div className="not-found-overlay">
        <div className="not-found-wrapper">
          <img
            src={NotFound}
            alt="Glasses"
            className="not-found-wrapper__banner"
          />
          <Typography variant="body1" className="not-found-wrapper__title">
            {t('Page Not Found | 404.1')}
          </Typography>
        </div>
      </div>
    </Frame>
  );
};

export default PageNotFoundDisplay;
