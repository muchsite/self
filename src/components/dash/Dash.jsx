import React from "react";
import logo from "../../images/BlackLogo.svg";
import "./dash.scss";
import { AiFillHome } from "react-icons/ai";
import { MdGroups2, MdPerson2 } from "react-icons/md";
import { useState } from "react";
import DashHpme from "../dashHome/DashHpme";
const Dash = ({ role }) => {
  const [activeDash, setActiveDash] = useState(0);
  return (
    <div className="dash_cont">
      <div className="dash_side">
        <img src={logo} alt="" className="dash_logo" />
        <div className="dahs_links">
          <div className={`dash_link ${activeDash == 0 && "active_dash_link"}`}>
            <AiFillHome /> HOME
          </div>
          <div className={`dash_link`}>
            <MdPerson2 /> PROFILE
          </div>
          {role == "admin" && (
            <>
              <div className={`dash_link`}>
                <MdGroups2 /> ALL GROUPS
              </div>
            </>
          )}
          {role == "facilitator" && (
            <>
              <div className={`dash_link`}>
                <MdGroups2 /> GROUPS
              </div>
            </>
          )}
        </div>
      </div>
      <DashHpme />
    </div>
  );
};

export default Dash;
