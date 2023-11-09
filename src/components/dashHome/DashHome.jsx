import React, { useState } from "react";
import { Chart as CartJS } from "chart.js/auto";
import { Bar, Pie, Line } from "react-chartjs-2";
import "./dashHome.scss";
import { useEffect } from "react";
import axios from "axios";
import { useMainContext } from "../../utils/context";
import { useParams } from "react-router-dom";
import BlackLogo from "../../images/BlackLogo.svg";
import close from "../../images/close.svg";
import Loading from "../loading/Loading";
import LoadnigMain from "../loading/LoadnigMain";
const DashHpme = () => {
  const { baseURL, refreshToken } = useMainContext();
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [japa, setJapa] = useState({});

  const [reading, setReading] = useState({});
  const [listening, setListening] = useState({});
  const [service, setService] = useState({});
  const [average, setAverage] = useState({});
  const [pending, setPending] = useState([]);

  const [pRowId, setPRowId] = useState(undefined);
  const [day_rest_duration, setday_rest_duration] = useState("");
  const [hearing_duration, sethearing_duration] = useState("");
  const [reading_duration, setreading_duration] = useState("");
  const [service_duration, setservice_duration] = useState("");
  const [sleep_time, setsleep_time] = useState("");
  const [chanting_finish_time, setchanting_finish_time] = useState("");
  const [chanting_start_time, setchanting_start_time] = useState("");
  const [wakeup_time, setwakeup_time] = useState("");

  const options = {
    legend: {
      labels: {
        fontColor: "#ffffff",
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          baseURL + `api/user/report/?month=10&year=2023`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = res.data;
        setJapa({
          labels: data.graph_data.date,
          datasets: [
            {
              label: "Japa",
              data: data.graph_data.japa,
              borderColor: "#00F69E",
              borderWidth: 4,
              cubicInterpolationMode: "monotone",
              legend: {
                labels: {
                  fontColor: "#ffffff",
                },
              },
            },
          ],
        });
        setReading({
          labels: data.graph_data.date,
          datasets: [
            {
              label: "Reading",
              data: data.graph_data.reading,
              borderColor: "#00F69E",
              borderWidth: 4,
              cubicInterpolationMode: "monotone",
              legend: {
                labels: {
                  fontColor: "#ffffff",
                },
              },
            },
          ],
        });
        setListening({
          labels: data.graph_data.date,
          datasets: [
            {
              label: "Listening",
              data: data.graph_data.listening,
              borderColor: "#00F69E",
              borderWidth: 4,
              cubicInterpolationMode: "monotone",
              legend: {
                labels: {
                  fontColor: "#ffffff",
                },
              },
            },
          ],
        });
        setService({
          labels: data.graph_data.date,
          datasets: [
            {
              label: "Service",
              data: data.graph_data.service,
              borderColor: "#00F69E",
              borderWidth: 4,
              cubicInterpolationMode: "monotone",
              legend: {
                labels: {
                  fontColor: "#ffffff",
                },
              },
            },
          ],
        });
        setAverage({
          japa: data.japa_average,
          reading: data.reading_average,
          listening: data.listening_average,
          service: data.service_average,
        });
        setPending(data.pending);
        setLoading(false);
      } catch (error) {
        refreshToken(error, fetchData);
        setLoading(false);
      }
    };
    fetchData();
  }, [sent]);
  const hadnlePendignOpen = (index) => {
    setPRowId(index);
    setwakeup_time(pending[index].wakeup_time);
    setday_rest_duration(pending[index].day_rest_duration);
    sethearing_duration(pending[index].hearing_duration);
    setreading_duration(pending[index].reading_duration);
    setservice_duration(pending[index].service_duration);
    setsleep_time(pending[index].sleep_time);
    setchanting_finish_time(pending[index].chanting_finish_time);
    setchanting_start_time(pending[index].chanting_start_time);
  };

  const handleSending = async () => {
    setSending(true);
    setErrorMessage("");
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(
        baseURL + `api/user/report/?report_id=${pending[pRowId].id}`,
        {
          ...pending[pRowId],
          day_rest_duration: day_rest_duration,
          hearing_duration: hearing_duration,
          reading_duration: reading_duration,
          service_duration: service_duration,
          sleep_time: sleep_time,
          chanting_finish_time: chanting_finish_time,
          chanting_start_time: chanting_start_time,
          wakeup_time: wakeup_time,
        },
        config
      );
      setSending(false);
      setSent(!sent);
      setErrorMessage("");
      setPRowId(undefined);
    } catch (error) {
      setSending(false);
      setErrorMessage(error.response.data.Error);
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadnigMain color={"#00f69e"} />
      ) : (
        <div className="dashHome_container">
          {pending.length > 0 && (
            <div className="dashboard_pending_container">
              <div className={`pending_form ${pRowId >= 0 && "top_0"}`}>
                <div className="pending_form_header">
                  <img src={BlackLogo} alt="" className="pending_logo" />
                  <img
                    src={close}
                    alt=""
                    className="close_pending"
                    onClick={() => setPRowId(undefined)}
                  />
                </div>
                <form>
                  <div className="pending_div">
                    <label htmlFor="">Wakeup Time</label>
                    <input
                      type="text"
                      value={wakeup_time}
                      onChange={(e) => setwakeup_time(e.currentTarget.value)}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Rest Duration</label>
                    <input
                      type="text"
                      value={day_rest_duration}
                      onChange={(e) =>
                        setday_rest_duration(e.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Hearing Duration</label>
                    <input
                      type="text"
                      value={hearing_duration}
                      onChange={(e) =>
                        sethearing_duration(e.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Reading Duration</label>
                    <input
                      type="text"
                      value={reading_duration}
                      onChange={(e) =>
                        setreading_duration(e.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Service Duration</label>
                    <input
                      type="text"
                      value={service_duration}
                      onChange={(e) =>
                        setservice_duration(e.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Sleeep Time</label>
                    <input
                      type="text"
                      value={sleep_time}
                      onChange={(e) => setsleep_time(e.currentTarget.value)}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Chanting Finish Time</label>
                    <input
                      type="text"
                      value={chanting_finish_time}
                      onChange={(e) =>
                        setchanting_finish_time(e.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Chanting Start Time</label>
                    <input
                      type="text"
                      value={chanting_start_time}
                      onChange={(e) =>
                        setchanting_start_time(e.currentTarget.value)
                      }
                    />
                  </div>
                </form>
                <div className="pending_btn_container">
                  <button onClick={handleSending}>Send</button>
                  {sending && <Loading color={"#00f69e"} />}
                  <p>{errorMessage}</p>
                </div>
              </div>
              <h2>Pending...</h2>
              <div className="dashboard_pendings">
                {pending?.map((item, index) => {
                  return (
                    <div
                      className="dashboard_pending"
                      key={index}
                      onClick={() => hadnlePendignOpen(index)}
                    >
                      <p>
                        <span>Hearing: </span> {item.hearing_title}
                      </p>
                      <p>
                        <span>Service: </span>
                        {item.service_name}
                      </p>
                      <p>
                        <span>Reading: </span>
                        {item.reading_title}
                      </p>
                      <p>
                        <span>Date: </span>
                        {item.date}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="charts_container">
            {japa.labels && (
              <div className="chart_container">
                <h2>Average Japa: {average.japa}</h2>
                <div className="chart">
                  <Line data={japa} options={options} />
                </div>
              </div>
            )}
            {reading.labels && (
              <div className="chart_container">
                <h2>Average Reading: {average.reading}</h2>
                <div className="chart">
                  <Line data={reading} options={options} />
                </div>
              </div>
            )}
            {listening.labels && (
              <div className="chart_container">
                <h2>Average Listening: {average.listening}</h2>
                <div className="chart">
                  <Line data={listening} options={options} />
                </div>
              </div>
            )}
            {service.labels && (
              <div className="chart_container">
                <h2>Average Service: {average.service}</h2>
                <div className="chart">
                  <Line data={service} options={options} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DashHpme;
