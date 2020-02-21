import React from 'react';
import NoData from '../../assets/no-data.png';
import { Typography } from '@material-ui/core';
import './no-data.styles.scss'
import { useTranslation } from "react-i18next";

const NoDataDisplay = () => {
  const { t } = useTranslation();
  return(
    <div className="no-data-overlay">
      <div className="no-data-wrapper">
        <img src={NoData} alt="Glasses" className="no-data-wrapper__banner"/>
        <Typography variant="body1" className="no-data-wrapper__title">
          {t('Data Not Found.1')}
        </Typography>
      </div>
    </div>
  )
}

export default NoDataDisplay;