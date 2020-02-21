import React from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import FrameAuth from "../../components/frame-auth/frame.component";
import Banner3 from "../../assets/banner-3.png";
import { loginMovie } from '../../redux/auth/auth.actions';
import { useTranslation } from "react-i18next";

const RenderInput = ({ input, label, placeholder, type, classes }) => (
  <TextField
    label={label}
    placeholder={placeholder}
    type={type}
    InputLabelProps={{ shrink: true }}
    className={`input-field ${classes}`}
    {...input}
    required
  />
);
const LoginAuth = ({ handleSubmit, loginMovie }) => {
  const { t } = useTranslation();
  const [visibility, setVisibility] = React.useState(false);
  const onSubmit = handleValues => {
    setVisibility(true);
    setTimeout(() => {
      setVisibility(false);
    }, 3000);
    loginMovie(handleValues);
  };
  return (
    <FrameAuth banner={Banner3} title={t('SignIn to continue.1')}>

      <form
        className="section-input__text-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          name="username"
          label={t('Username.1')}
          placeholder="qupas"
          type="text"
          classes="text-field--1"
          component={RenderInput}
        />
        <Field
          name="password"
          label={t('Password.1')}
          placeholder={t('Password.1')}
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
          {visibility ? (
              <CircularProgress size={20} style={{ color: "white" }} />
            ) : (
              t("Login.1")
            )}
        </Button>
      </form>
    </FrameAuth>
  );
};

const formHOC = reduxForm({
  form: "Login"
})(LoginAuth);

export default connect(null, { loginMovie })(formHOC);
