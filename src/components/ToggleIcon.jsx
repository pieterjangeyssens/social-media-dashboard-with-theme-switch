import React from "react";
import iconLight from "../images/toggle-unchecked.svg";
import iconDark from "../images/toggle-checked.svg";

const ToggleIcon = (props) => {
  return <img src={props.mode === "light" ? iconLight : iconDark} />;
};

export default ToggleIcon;
