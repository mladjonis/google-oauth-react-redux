import React from "react";

const GoogleLogin = ({ name, signOut }) => {
  return (
    <>
      <button className="ui red google button" onClick={signOut}>
        <i className="google icon" />
        {name ? name : null}
      </button>
    </>
  );
};

export default GoogleLogin;
