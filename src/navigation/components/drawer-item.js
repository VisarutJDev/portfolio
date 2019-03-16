import React from "react";

import { withStyles } from "@material-ui/core";
import "@fortawesome/fontawesome-free-solid";

import DrawerMenu from "./drawer-menu";
import { PathConfig } from "config";

const DrawerItems = ({
  onClick,
  is_md_up,
  classes
}) => (
  <div className={classes.root}>
    <DrawerMenu
      text="Work Experience"
      onClick={onClick}
      is_md_up={is_md_up}
      icon={"clipboard-list"}
      path={PathConfig.work_experience}
    />
  </div>
);

const styles_component = theme => ({
  root: {
    background: "transparent",
    overflowY: "auto"
  }
});

export default withStyles(styles_component)(DrawerItems);
