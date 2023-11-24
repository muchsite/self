import React from "react";
import "./event.scss";
const Events = ({ events }) => {
  return (
    <div className="events_container">
      <h2>Events</h2>
      <div className="events_contetn">
        {events?.map((item, index) => {
          return (
            <div
              className={`event ${(index + 3) % 2 == 0 && "reverse"}`}
              key={index}
            >
              <img src={item.e_img} alt="event image" />
              <div className="event_info_container">
                <div className="event_info">
                  <h3>{item.event}</h3>
                  <p>{item.cost}</p>
                  <p>{item.date_time}</p>
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
