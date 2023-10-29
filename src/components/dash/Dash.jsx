import React from "react";
import logo from "../../images/BlackLogo.svg";
import "./dash.scss";
import { AiFillHome } from "react-icons/ai";
import { MdGroups2, MdPerson2 } from "react-icons/md";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const Dash = () => {
  const [activeDash, setActiveDash] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useParams();
  const handleNavigate = (arg) => {
    if (arg == "home") {
      setActiveDash("home");
      navigate("home");
    }
    if (arg == "profile") {
      setActiveDash("profile");
      navigate("profile");
    }
    if (arg == "allgroups") {
      setActiveDash("allgroups");
      navigate("allgroups");
    }
    if (arg == "group") {
      setActiveDash("group");
      navigate("group");
    }
  };
  useEffect(() => {
    setActiveDash(location.pathname.split("/")[4]);
    console.log(activeDash);
  }, [location.pathname.split("/")[4]]);
  return (
    <div className="dash_side">
      <img src={logo} alt="" className="dash_logo" />
      <div className="dahs_links">
        <div
          onClick={() => handleNavigate("home")}
          className={`dash_link ${activeDash == "home" && "active_dash_link"}`}
        >
          <AiFillHome /> HOME
        </div>
        <div
          onClick={() => handleNavigate("profile")}
          className={`dash_link ${
            activeDash == "profile" && "active_dash_link"
          }`}
        >
          <MdPerson2 /> PROFILE
        </div>
        {role == "admin" && (
          <>
            <div
              onClick={() => handleNavigate("allgroups")}
              className={`dash_link ${
                activeDash == "allgroups" && "active_dash_link"
              }`}
            >
              <MdGroups2 /> ALL GROUPS
            </div>
          </>
        )}
        {role == "facilitator" && (
          <>
            <div
              onClick={() => handleNavigate("group")}
              className={`dash_link ${
                activeDash == "group" && "active_dash_link"
              }`}
            >
              <MdGroups2 /> GROUP
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dash;
