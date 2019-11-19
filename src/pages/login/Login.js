import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { login } from "../../api/api";
import { useAuth } from "../../context/auth";

const Login = props => {
  const [id, setId] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const { setIsLoggedIn, setUser } = useAuth();

  const handleLogin = async () => {
    let response = await login(id);
    if (response) {
      setIsLoggedIn(true);
      setUser(response);
      props.history.push("/");
    } else {
      showError();
    }
  };

  const showError = () => {
    setIsSuccess(false);
    setTimeout(() => {
      setIsSuccess(true);
    }, 3000);
  };

  return (
    <div className="Login">
      <div>Set Your id</div>
      <input onChange={e => setId(e.target.value)} name="id" />
      <button onClick={handleLogin} className="login-btn">
        Set
      </button>
      {isSuccess ? null : <p className="footnote error-msg">Login Failed</p>}
    </div>
  );
};

export default withRouter(Login);
