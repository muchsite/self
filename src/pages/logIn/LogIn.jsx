import React from "react";
import { useMainContext } from "../../utils/context";
import "./login.scss";
const LogIn = () => {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useMainContext();

  return (
    <div className="login_container">
      <form onSubmit={handleSubmit}>
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
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login_btn_container">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
