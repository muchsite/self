import React from "react";
import { useMainContext } from "../../utils/context";
import logo from "../../images/BlackLogo.png";
import "./login.scss";
import Loading from "../../components/loading/Loading";
const LogIn = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    logInLoading,
    loginError,
  } = useMainContext();

  return (
    <div className="login_container">
      <form onSubmit={handleSubmit}>
        <div className="log_in_header">
          <h2>Log In</h2>
          <img src={logo} alt="" />
        </div>
        <div className="login_div">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_div">
          <label htmlFor="">Password::</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login_btn_container">
          <button type="submit">Log In</button>
          {logInLoading && <Loading />}
          {!logInLoading && loginError.length > 0 && <p>{loginError}</p>}
        </div>
      </form>
    </div>
  );
};

export default LogIn;
