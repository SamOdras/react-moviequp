import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import FrameAuth from "../../components/frame-auth/frame.component";
import Banner3 from "../../assets/banner-3.png";

const RenderInput = ({ input, label, placeholder, type, classes }) => (
  <TextField
    label={label}
    placeholder={placeholder}
    type={type}
    InputLabelProps={{ shrink: true }}
    className={`input-field ${classes}`}
    {...input}
  />
);
const LoginAuth = ({ handleSubmit }) => {
  const onSubmit = handleValues => {
    console.log(handleValues);
  };
  return (
    <FrameAuth banner={Banner3} title="SignIn to continue">
      <form
        className="section-input__text-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          name="username"
          label="Username"
          placeholder="qupas"
          type="text"
          classes="text-field--1"
          component={RenderInput}
        />
        <Field
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          classes="text-field--2"
          component={RenderInput}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 30 }}
        >
          Masuk
        </Button>
      </form>
    </FrameAuth>
  );
};

const formHOC = reduxForm({
  form: "Login"
})(LoginAuth);

export default connect(null)(formHOC);
