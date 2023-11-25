import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import LoadnigMain from "../../components/loading/LoadnigMain";
import "./events.scss";
const EventsAll = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + "api/events/");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [active, setActive] = useState(true);
  console.log(data);
  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="all_e_container">
          <h2 className="a_e_title">EVENTS</h2>
          <div className="ar_btn_container">
            <button
              onClick={() => setActive(true)}
              className={`${active ? "ar_btn_active" : ""}`}
            >
              ACTIVE
            </button>
            <button
              onClick={() => setActive(false)}
              className={`${!active ? "ar_btn_active" : ""}`}
            >
              ARCHIVED
            </button>
          </div>
          <div className="a_events_container">
            {active ? (
              <>
                {data?.events?.map((item, inedx) => {
                  return (
                    <div className="a_event" key={inedx}>
                      <img src={item.e_img} alt="" />
                      <div className="a_event_info">
                        <p className="a_event_title">
                          <span>{item.event}</span>
                        </p>
                        <p>
                          Addresss: <span>{item.addresss}</span>
                        </p>
                        <p>
                          Time: <span>{item.date_time}</span>
                        </p>
                        <p>
                          Cost: <span>{item.cost}$</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {" "}
                {data?.archived?.map((item, inedx) => {
                  return (
                    <div className="a_event" key={inedx}>
                      <img src={item.e_img} alt="" />
                      <div className="a_event_info">
                        <p className="a_event_title">
                          <span>{item.event}</span>
                        </p>
                        <p>
                          Addresss: <span>{item.addresss}</span>
                        </p>
                        <p>
                          Time: <span>{item.date_time}</span>
                        </p>
                        <p>
                          Cost: <span>{item.cost}$</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsAll;
