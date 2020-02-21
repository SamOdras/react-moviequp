import React from "react";
import { useTranslation } from "react-i18next";
import { Switch, FormControlLabel } from "@material-ui/core";
import { checkSwitch } from '../../redux/favorite/favorite.actions';
import { connect } from 'react-redux';

const SwitchLanguage = ({ isChecked, checkSwitch }) => {
  const { i18n } = useTranslation();
  const handleSwitch = e => {
    checkSwitch(!isChecked);
    if (isChecked === false) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("id");
    }
  };
  return (
    <FormControlLabel
      label="English"
      labelPlacement="end"
      control={
        <Switch
          checked={isChecked}
          onChange={handleSwitch}
          value="checkedB"
          color="primary"
          label="English"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      }
    />
  );
};

const mapStateToProps = state => ({
  isChecked: state.favorite.checkSwitch
})
export default connect(mapStateToProps,{ checkSwitch })(SwitchLanguage);
