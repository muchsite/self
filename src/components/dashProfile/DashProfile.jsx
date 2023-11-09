import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import LoadnigMain from "../loading/LoadnigMain";
import "./profile.scss";
const DashProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { baseURL, refreshToken } = useMainContext();
  const [email, setEmail] = useState("value");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [profession, setProfession] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    const fetchProfiel = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(baseURL + `api/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        setProfile(data);
        setEmail(data.email);
        setDob(data.dob);
        setGender(data.gender);
        setProfession(data.profession);
        setNumber(data.number);
        setLoading(false);
      } catch (error) {
        refreshToken(error, fetchProfiel);
        setLoading(false);
        setLoading(false);
      }
    };
    fetchProfiel();
  }, []);
  const handleProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.patch(
        baseURL + "api/profile/",
        {
          email,
          number,
          profession,
          dob,
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <LoadnigMain color={"#00f69e"} />
      ) : (
        <div className="profile_container">
          <div className="profile_content">
            <img src={profile.profile_image} alt="" />
            <div className="profile_info">
              <div className="profile_input">
                <p>Email:</p>
                <div>
                  <input
                    type="text"
                    value={email}
                    disabled
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="profile_input">
                <p>Number:</p>
                <div>
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="profile_input">
                <p>Gender:</p>
                <div>
                  <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="profile_input">
                <p>Date Of Brith:</p>
                <div>
                  <input
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="profile_input">
                <p>Profession:</p>
                <div>
                  <input
                    type="text"
                    value={profession}
                    onChange={(e) => setProfession(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="profile_btn">
                <button onClick={handleProfile}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashProfile;
