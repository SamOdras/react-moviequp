import React from "react";
import "./error-boundary.styles.scss";
import { Typography } from "@material-ui/core";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <div className="boundary-overlay">
          <div className="boundary-wrapper">
            <img
              src="https://i.imgur.com/FOeYt4E.png"
              alt="Glasses"
              className="boundary-wrapper__banner"
            />
            <Typography variant="body1" className="boundary-wrapper__title">
              Sory :( This page is broken
            </Typography>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
