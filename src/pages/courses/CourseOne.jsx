import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import "./one.scss";
import { useParams } from "react-router-dom";
import LoadnigMain from "../../components/loading/LoadnigMain";
const CourseOne = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { courseID } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + `api/course/${courseID}/`);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="s_course_container">
          <h2 className="s_course_title"> {data.course?.c_title}</h2>
          <img src={data.course?.c_img} alt="" className="s_course_img" />
          <div className="s_course_info"></div>
        </div>
      )}
    </>
  );
};

export default CourseOne;
