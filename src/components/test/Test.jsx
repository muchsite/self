import React, { useState } from "react";
import "./test.scss";

const Test = ({ testimonials }) => {
  const [count, setCount] = useState(0);

  return (
    <section className="test_container">
      <div className="test_contetnt">
        <div className="test_title">
          <div>
            <h2>TESTIMONIALS</h2>
            <h3>
              What people say <br /> about Us.
            </h3>
          </div>
          <div className="test_buttons">
            <div
              className={`test_button ${count == 0 && "test_button_active"}`}
              onClick={() => setCount(0)}
            ></div>
            <div
              className={`test_button ${count == 1 && "test_button_active"}`}
              onClick={() => setCount(1)}
            ></div>
            <div
              className={`test_button ${count == 2 && "test_button_active"}`}
              onClick={() => setCount(2)}
            ></div>
          </div>
        </div>
        <div className="test_items">
          {testimonials?.slice(0, 3).map((item, index) => {
            return (
              <div
                className={`test_item ${
                  index == count
                    ? "current"
                    : index < count
                    ? "pre"
                    : index > count + 1
                    ? "next_2"
                    : "next"
                }`}
                style={{ zIndex: 4 - index }}
                key={index}
              >
                <div className="test_item_realtive">
                  <img src={item.image} alt="" />
                  <div className="test_info">
                    <p>{item.testimonial}</p>
                    <div>
                      <h4>Name: {item.name}</h4>
                      <h5>Profession: {item.profession}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Test;
