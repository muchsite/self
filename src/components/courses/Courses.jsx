import React from "react";
import "./courses.scss";
import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";

const Courses = () => {
  const [hover, setHover] = useState(null);
  return (
    <section className="courses_container">
      <h2>COURSES</h2>
      <div className="courses_content">
        <div className="course_background"></div>
        <div className="courses_items_container">
          <Parallax speed={20}>
            <div
              className="courses_item"
              onMouseEnter={() => setHover(0)}
              onMouseLeave={() => setHover(null)}
            >
              <img src={c1} alt="" />
              <div className="courses_item_title">
                <h3>Course Titel 1</h3>
              </div>
              <div className={`course_info ${hover === 0 && "top_0"}`}>
                <h4>course title</h4>
              </div>
            </div>
          </Parallax>
          <Parallax speed={35}>
            <div
              className="courses_item"
              onMouseEnter={() => setHover(1)}
              onMouseLeave={() => setHover(null)}
            >
              <img src={c2} alt="" />
              <div className="courses_item_title_2">
                <h3>Course Titel 1</h3>
              </div>
              <div className={`course_info ${hover === 1 && "top_0"}`}>
                <h4>course title</h4>
              </div>
            </div>
          </Parallax>
          <Parallax speed={10}>
            <div
              className="courses_item"
              onMouseEnter={() => setHover(2)}
              onMouseLeave={() => setHover(null)}
            >
              <img src={c3} alt="" />
              <div className="courses_item_title">
                <h3>Course Titel 1</h3>
              </div>
              <div className={`course_info ${hover === 2 && "top_0"}`}>
                <h4>course title</h4>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Courses;
