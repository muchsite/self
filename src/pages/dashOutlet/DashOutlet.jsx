import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Dash from "../../components/dash/Dash";
import { useMainContext } from "../../utils/context";
import bell from "../../images/bell.svg";
const DashOutlet = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { baseURL, refreshToken } = useMainContext();
  useEffect(() => {
    const fetchProfiel = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(baseURL + `api/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
        setLoading(false);
      } catch (error) {
        refreshToken(error, fetchProfiel);
        setLoading(false);
        setLoading(false);
      }
    };
    fetchProfiel();
  }, []);

  return (
    <div className="dash_cont">
      <Dash />
      <div className="dash_right">
        {loading ? (
          <h3 style={{ color: "#fff" }}>Loading...</h3>
        ) : (
          <div className="dash_head">
            <div className="not_bell_container">
              <img src={bell} alt="" className="not_bell" />
              <p>0</p>
            </div>
            <img
              src={profile.profile_image}
              alt=""
              className="dash_header_profile"
            />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default DashOutlet;
