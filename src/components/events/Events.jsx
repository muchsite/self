import React from "react";
import "./event.scss";
import { useMainContext } from "../../utils/context";
const Events = ({ events }) => {
  const { convertTime } = useMainContext();
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
                  <p>{convertTime(item.date_time).all}</p>
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
