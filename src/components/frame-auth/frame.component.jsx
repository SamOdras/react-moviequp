import React from "react";
import "./frame.styles.scss";
import { Typography } from "@material-ui/core";


const FrameAuth = props => {
  return (
    <div className="page-login">
      <div className="section-input">
        <div className="section-input__logo">
          <Typography variant="h5" className="logo-title">
            <span className="logo-title--1">MovieQup</span> <br />
            <span className="logo-title--2">{props.title}</span>
          </Typography>
        </div>
        {props.children}
      </div>
      <div className="section-img">
        <img className="section-img__image" src={props.banner} alt="" />
      </div>
    </div>
  );
};

export default FrameAuth;
