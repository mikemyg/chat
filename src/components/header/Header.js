import React from "react";
import { useAuth } from "../../context/auth";
import { withRouter } from "react-router-dom";

const Header = props => {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className="Header">
      <h3
        onClick={() => {
          props.history.push("/");
        }}
        className="header-logo"
      >
        Chat
      </h3>
      <h3
        onClick={() => {
          props.history.push("/login");
        }}
        className="chat-btn"
      >
        {isLoggedIn ? user.name : "Login"}
      </h3>
    </div>
  );
};

export default withRouter(Header);
