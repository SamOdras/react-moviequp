import React from "react";
import "./frame.styles.scss";
import Header from "../header/header.component";
import SideMenu from "../side-menu/side-menu.component";

const Frame = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="front-page-content">
        <div className="front-page-content__side-menu">
          <SideMenu />
        </div>
        <div className="front-page-content__main-menu">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Frame;
