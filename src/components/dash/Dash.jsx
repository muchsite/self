import React from "react";
import logo from "../../images/BlackLogo.svg";
import "./dash.scss";
import { AiFillHome } from "react-icons/ai";
import { MdGroups2, MdPerson2 } from "react-icons/md";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ham from "../../images/ham.svg";
import close from "../../images/close.svg";
import axios from "axios";
import { useMainContext } from "../../utils/context";
const Dash = () => {
  const [activeDash, setActiveDash] = useState("");
  const [openMenu, setOepenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useParams();
  const { baseURL } = useMainContext();

  const handleNavigate = (arg) => {
    if (arg == "home") {
      setActiveDash("home");
      setOepenMenu(false);
      navigate("home");
    }
    if (arg == "profile") {
      setOepenMenu(false);
      setActiveDash("profile");
      navigate("profile");
    }
    if (arg == "allgroups") {
      setOepenMenu(false);
      setActiveDash("allgroups");
      navigate("allgroups");
    }
    if (arg == "group") {
      setOepenMenu(false);
      setActiveDash("group");
      navigate("allgroups/:NON");
    }
  };
  const hadleLogOut = async () => {
    try {
      const body = { refresh: localStorage.getItem("refresh") };
      const res = await axios.post(baseURL + "logout/", body);
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      navigate("/login");
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      navigate("/login");
    }
  };
  useEffect(() => {
    setActiveDash(location.pathname.split("/")[4]);
  }, [location.pathname.split("/")[4]]);
  return (
    <>
      <div className="dash_ham" onClick={() => setOepenMenu(true)}>
        <img src={ham} alt="" />
      </div>
      <div className={`dash_side ${openMenu && "dah_open"}`}>
        <div className="pos_fixed">
          <div className="dash_logo_container">
            <img src={logo} alt="" className="dash_logo" />
            <img
              src={close}
              alt=""
              className="dash_close"
              onClick={() => setOepenMenu(false)}
            />
          </div>
          <div className="dahs_links">
            <div
              onClick={() => handleNavigate("home")}
              className={`dash_link ${
                activeDash == "home" && "active_dash_link"
              }`}
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
                    activeDash == "allgroups" && "active_dash_link"
                  }`}
                >
                  <MdGroups2 /> GROUP
                </div>
              </>
            )}
            <div onClick={() => hadleLogOut()} className={`dash_link `}>
              <AiFillHome /> Log Out
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
