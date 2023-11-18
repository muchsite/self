import React from "react";
import "./event.scss";
import e1 from "../../images/e1.jpg";
import e2 from "../../images/e2.jpg";
import e3 from "../../images/e3.jpg";

const Events = () => {
  const events = [
    {
      img: e1,
      title: "Events title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod",
    },
    {
      img: e2,
      title: "Events title 2",
      desc: "neque nulla repellat, voluptate consequuntur asperiores quas culpa odit",
    },
    {
      img: e3,
      title: "Events title 3",
      desc: "repellendus odio quaerat aperiam tenetur dignissimos provident, quam",
    },
  ];
  return (
    <div className="events_container">
      <h2>Events</h2>
      <div className="events_contetn">
        {events.map((item, index) => {
          return (
            <div
              className={`event ${(index + 3) % 2 == 0 && "reverse"}`}
              key={index}
            >
              <img src={item.img} alt="" />
              <div className="event_info_container">
                <div className="event_info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
