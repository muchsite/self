import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import LoadnigMain from "../../components/loading/LoadnigMain";
import "./retreat.scss";
import { Link } from "react-router-dom";
const RetreatAll = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + "api/camps/");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="all_retreat_container">
          <h2 className="retreat_itle">RETREAT</h2>
          <div className="retreat_btns">
            <button
              onClick={() => setActive(true)}
              className={`${active ? "r_btn_active" : ""}`}
            >
              ACTIVE
            </button>
            <button
              onClick={() => setActive(false)}
              className={`${!active ? "r_btn_active" : ""}`}
            >
              ARCHIVED
            </button>
          </div>
          <div className="retreat_content">
            {active
              ? data.active_camps?.map((item, index) => {
                  return (
                    <Link className="retreat_item" to={item.slug} key={index}>
                      <img src={item.camp_poster} alt="" />
                      <div className="retreat_info">
                        <p className="retreat_card_title">{item.camp}</p>
                        <div className="retreat_dates">
                          <p className="">Starts At: {item.start_date}</p>
                          <p className="">Ends At: {item.end_date}</p>
                        </div>
                        <p className="retreat_cost">Price: {item.cost}$</p>
                      </div>
                    </Link>
                  );
                })
              : data.archived?.map((item, index) => {
                  return (
                    <div className="retreat_item" key={index}>
                      <img src={item.camp_poster} alt="" />
                      <div className="retreat_info">
                        <p className="retreat_card_title">{item.camp}</p>
                        <div className="retreat_dates">
                          <p className="">Starts At: {item.start_date}</p>
                          <p className="">Ends At: {item.end_date}</p>
                        </div>
                        <p className="retreat_cost">Price: {item.cost}$</p>
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

export default RetreatAll;
