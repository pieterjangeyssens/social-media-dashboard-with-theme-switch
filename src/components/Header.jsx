import React from "react";
import Toggle from "react-toggle";
import ToggleIcon from "./ToggleIcon";

const Header = (props) => {
  return (
    <header className="primary-header | container flex-col">
      <div className="header-title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="header-toggle | flex-row">
        <p>Dark Mode</p>
        <Toggle
          defaultChecked={props.default === "dark"}
          icons={{
            checked: <ToggleIcon mode="light" />,
            unchecked: <ToggleIcon mode="dark" />,
          }}
          onChange={props.toggleTheme}
        ></Toggle>
      </div>
    </header>
  );
};

export default Header;
