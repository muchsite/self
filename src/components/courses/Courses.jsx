import React from "react";
import "./courses.scss";

import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import { Link } from "react-router-dom";
const Courses = ({ courses }) => {
  const [hover, setHover] = useState(null);
  const [click, setClick] = useState(null);
  const handleClick = (index) => {
    if (index !== click) {
      setClick(index);
    } else {
      setClick(null);
    }
  };

  return (
    <section className="courses_container">
      <h2 className="course_titel">COURSES</h2>
      <div className="courses_content">
        <div className="course_background"></div>
        <div className="courses_items_container">
          {courses?.map((item, index) => {
            return (
              <Parallax
                className="course_item_parallax"
                speed={index == 0 ? 20 : index == 1 ? 35 : 10}
                key={index}
              >
                <div
                  className="courses_item"
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img src={item.c_img} alt="" />
                  <div
                    className={`${
                      index == 1 ? "courses_item_title_2" : "courses_item_title"
                    }`}
                  >
                    <h3>{item.c_title}</h3>
                  </div>
                  <div className={`course_info ${hover === index && "top_0"}`}>
                    <h4>{item.c_title}</h4>
                    <p>
                      Facilitator:
                      <span> {item.facilitator}</span>
                    </p>
                    <p>
                      Price:
                      {item.cost > 0 ? (
                        <span> {item.cost} $</span>
                      ) : (
                        <span> Free!</span>
                      )}
                    </p>
                    <Link className="learn_more">Learn More!</Link>
                  </div>
                  <div
                    className="course_btn_container"
                    onClick={() => handleClick(index)}
                  >
                    <div
                      className={`circle-plus closed ${
                        click == index && "opened"
                      }`}
                    >
                      <div className="circle">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`course_info_mobile ${
                      click === index && "top_0"
                    }`}
                  >
                    <h4>{item.c_title}</h4>
                    <p>
                      Facilitator:
                      <span> {item.facilitator}</span>
                    </p>
                    <p>
                      Price:
                      {item.cost > 0 ? (
                        <span> {item.cost} $</span>
                      ) : (
                        <span> Free!</span>
                      )}
                    </p>
                    <Link className="learn_more">Learn More!</Link>
                  </div>
                </div>
              </Parallax>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
