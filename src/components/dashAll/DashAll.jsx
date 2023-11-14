import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../../utils/context";
import LoadingMain from "../loading/LoadnigMain";
import "./all.scss";
const DashAll = () => {
  const { baseURL, refreshToken } = useMainContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchProfiel = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(baseURL + `api/allgroups/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        setData(data.groups);
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
    <>
      {loading ? (
        <LoadingMain color={"#00f69e"} />
      ) : (
        <div className="all_courses_container">
          <div className="all_courses_content">
            <div className="couses_head">
              <p>Name:</p>
              <p className="row_image">Image:</p>
              <p>Type:</p>
              <p className="row_id">ID:</p>
              <p>Place:</p>
              <p>Description:</p>
            </div>
            {data?.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`couses_row ${
                    index % 2 == 0 ? "course_row_light" : "course_row_dark"
                  }`}
                  to={`${item.id}`}
                >
                  <div className="couse_cell">
                    <p>{item.name}</p>
                  </div>
                  <div className="couse_cell row_image">
                    <img src={item.group_image} alt="" />
                  </div>
                  <div className="couse_cell">
                    <p>{item.group_type}</p>
                  </div>
                  <div className="couse_cell row_id">
                    <p>{item.id}</p>
                  </div>
                  <div className="couse_cell">
                    <p>{item.place}</p>
                  </div>
                  <div className="couse_cell">
                    <p>{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default DashAll;
