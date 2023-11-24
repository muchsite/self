import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import "./courses.scss";
import LoadnigMain from "../../components/loading/LoadnigMain";
import { Link } from "react-router-dom";
const CoursesAll = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + "api/courses/");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [hover, setHover] = useState(null);
  const [active, setActive] = useState(true);

  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="all_c_countainer">
          <h2 className="all_c_title">COURSES</h2>
          <div className="ar_btn_container">
            <button
              onClick={() => setActive(true)}
              className={`${active ? "ar_btn_active" : ""}`}
            >
              ATIVE
            </button>
            <button
              onClick={() => setActive(false)}
              className={`${!active ? "ar_btn_active" : ""}`}
            >
              ARVHIVE
            </button>
          </div>
          <div className="a_c_contetn">
            {active
              ? data.courses?.map((item, index) => {
                  return (
                    <div
                      className="a_c_item"
                      key={index}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <img src={item.c_img} alt="course_imgage" />
                      <div
                        className={`${
                          index == 1
                            ? "courses_item_title_2"
                            : "courses_item_title"
                        }`}
                      >
                        <h3>{item.c_title}</h3>
                      </div>
                      <div
                        className={`course_info ${hover === index && "top_0"}`}
                      >
                        <h4>{item.c_title}</h4>
                        <p>
                          Facilitator:
                          <span> {item.facilitator}</span>
                        </p>
                        <p>
                          Price:
                          <span> {item.cost} $</span>
                        </p>
                        <Link className="learn_more">Learn More!</Link>
                      </div>
                    </div>
                  );
                })
              : data.archived?.map((item, index) => {
                  return (
                    <div
                      className="a_c_item"
                      key={index}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <img src={item.c_img} alt="course_imgage" />
                      <div
                        className={`${
                          index == 1
                            ? "courses_item_title_2"
                            : "courses_item_title"
                        }`}
                      >
                        <h3>{item.c_title}</h3>
                      </div>
                      <div
                        className={`course_info ${hover === index && "top_0"}`}
                      >
                        <h4>{item.c_title}</h4>
                        <p>
                          Facilitator:
                          <span> {item.facilitator}</span>
                        </p>
                        <p>
                          Price:
                          <span> {item.cost} $</span>
                        </p>
                        <Link className="learn_more">Learn More!</Link>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesAll;

// const { baseURL } = useMainContext();
// const [data, setData] = useState({});
// const [loading, setLoading] = useState(false);
// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(baseURL + "api/courses/");
//       setData(res.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   fetchData();
// }, []);
// console.log(data);
