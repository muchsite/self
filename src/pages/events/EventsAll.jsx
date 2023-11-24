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
  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="all_e_container">
          <h2>EVENTS</h2>
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
        </div>
      )}
    </>
  );
};

export default EventsAll;
