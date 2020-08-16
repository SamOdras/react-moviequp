import React from "react";
import "./frame.styles.scss";
import Header from "../header/header.component";
import SideMenu from "../side-menu/side-menu.component";

import { withRouter } from 'react-router-dom';

class Frame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="front-page-content">
          <div className="front-page-content__side-menu">
            <SideMenu />
          </div>
          <div className="front-page-content__main-menu">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Frame);
