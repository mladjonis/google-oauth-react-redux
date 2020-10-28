import React from "react";

const GoogleLogout = ({ signIn }) => {
  return (
    <>
      <button className="ui green google button" onClick={signIn}>
        <i className="google icon" />
        Sign In
      </button>
    </>
  );
};

export default GoogleLogout;
