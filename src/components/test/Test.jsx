import React, { useState } from "react";
import "./test.scss";
import image from "../../images/pr.png";
const Test = () => {
  const [count, setCount] = useState(0);
  const test = [
    {
      image,
      desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Mike taylor",
      prof: "Teacher",
    },
    {
      image,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur itaque aliquid nam incidunt cupiditate nemo perferendis veritatis ipsum ratione, repudiandae saepe minus at iusto corporis natus? Magnam, neque hic!",
      name: "Jhon Dow",
      prof: "Proffesor",
    },
    {
      image,
      desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Asdf Dadfasd",
      prof: "asdfasdf",
    },
  ];
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
          {test.map((item, index) => {
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
                    <p>{item.desc}</p>
                    <div>
                      <h4>{item.name}</h4>
                      <h5>{item.prof}</h5>
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
