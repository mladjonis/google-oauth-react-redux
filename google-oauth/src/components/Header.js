import React from "react";
import GoogleOAuth from "./GoogleOAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <GoogleOAuth />
      </div>
    </div>
  );
};

export default Header;
