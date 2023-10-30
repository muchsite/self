import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import "./profile.scss";
const DashProfile = () => {
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
  console.log(profile);
  return <div className="profile_container"></div>;
};

export default DashProfile;
