import React from 'react';
import NoData from '../../assets/no-data.png';
import { Typography } from '@material-ui/core';
import './no-data.styles.scss'
const NoDataDisplay = () => {
  return(
    <div className="no-data-overlay">
      <div className="no-data-wrapper">
        <img src={NoData} alt="Glasses" className="no-data-wrapper__banner"/>
        <Typography variant="body1" className="no-data-wrapper__title">
          Data Not Found
        </Typography>
      </div>
    </div>
  )
}

export default NoDataDisplay;