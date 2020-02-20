import React from "react";
import { useTranslation } from "react-i18next";
import { Switch, FormControlLabel } from "@material-ui/core";

const SwitchLanguage = () => {
  const [checked, setChecked] = React.useState(true);
  const { i18n } = useTranslation();
  const handleSwitch = e => {
    setChecked(e.target.checked);
    if (e.target.checked === true) {
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
          checked={checked}
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

export default SwitchLanguage;
