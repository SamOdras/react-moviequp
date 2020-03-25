import React from "react";
import "./frame.styles.scss";
import { Typography } from "@material-ui/core";
import ErrorNotif from "../error-notif/error-notif.component";

import { withRouter } from "react-router-dom";
import { selectError } from "../../redux/auth/auth.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import SwitchLanguage from "../../components/switch-language/switch-language.component";

class FrameAuth extends React.Component {
  // onChecked = () => {
  //   const { history } = this.props;
  //   const isAuth = localStorage.getItem("qupas");
  //   if (isAuth) history.push("/");
  // };
  // componentDidMount() {
  //   this.onChecked();
  // }
  render() {
    const { isError } = this.props;
    return (
      <div className="page-login">
        <ErrorNotif isError={isError} message="Invalid Username or Password" />
        <div className="switch-button">
          <SwitchLanguage />
        </div>
        <div className="section-input">
          <div className="section-input__logo">
            <Typography variant="h5" className="logo-title">
              <span className="logo-title--1">MovieQup</span> <br />
              <span className="logo-title--2">{this.props.title}</span>
            </Typography>
          </div>
          {this.props.children}
        </div>
        <div className="section-img">
          <img className="section-img__image" src={this.props.banner} alt="" />
        </div>
      </div>
    );
  }
}
const HOC = withRouter(FrameAuth);
const mapStateToProps = createStructuredSelector({
  isError: selectError
});
export default connect(mapStateToProps)(HOC);
