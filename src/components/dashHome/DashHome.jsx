import React, { useState } from "react";
import { Chart as CartJS } from "chart.js/auto";
import { Bar, Pie, Line } from "react-chartjs-2";
import "./dashHome.scss";
import { useEffect } from "react";
import axios from "axios";
import { useMainContext } from "../../utils/context";
import { useNavigate, useParams } from "react-router-dom";
import BlackLogo from "../../images/BlackLogo.svg";
import close from "../../images/close.svg";
import Loading from "../loading/Loading";
import LoadnigMain from "../loading/LoadnigMain";
import ClockTwo from "../clock/ClockTwo";
import { useSearchParams } from "react-router-dom";
const DashHpme = () => {
  const { baseURL, refreshToken } = useMainContext();
  const [resData, setResData] = useState({});
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);

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
  const [clockType, setClockType] = useState("");
  const [openClock, setOpenClock] = useState(false);
  const [refetch, setRefetch] = useState(false);
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
        if (month && year) {
          console.log(baseURL + `api/user/report?month=${month}&year=${year}`);
          const res = await axios.get(
            baseURL + `api/user/report/?month=${month}&year=${year}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = res.data;
          console.log(data);
          setResData(data);
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
        } else {
          const res = await axios.get(baseURL + `api/user/report/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
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
        }

        setLoading(false);
      } catch (error) {
        refreshToken(error, fetchData);
        setLoading(false);
      }
    };
    fetchData();
  }, [sent, refetch]);
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
  const convertToAmPm = (time24) => {
    if (typeof time24 !== "string") return "Invalid time format";
    const time = time24.split(":");
    let hours = parseInt(time[0], 10);
    const minutes = time[1];
    if (hours < 0 || hours > 23) return "Invalid time format";
    const suffix = hours >= 12 ? "PM" : "AM";
    hours = ((hours + 11) % 12) + 1;
    const time12 = `${hours}:${minutes} ${suffix}`;
    return time12;
  };

  const handleOpenClock = (t) => {
    setOpenClock(!openClock);
    setClockType(t);
  };

  // search
  const [searchParams, setSearchParams] = useSearchParams();
  const [month, setMonth] = useState(searchParams.get("month"));
  const [year, setYear] = useState(searchParams.get("year"));

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`?month=${month}&year=${year}`);
    setRefetch(!refetch);
  };
  return (
    <>
      <div className="df">
        <div className="dash_home_dates_container">
          <h2>Search a range of data</h2>
          <div className="dash_home_dates">
            <div className="dah_home_input">
              <label htmlFor="selectInput">Select a month:</label>
              <select
                id="selectInput"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Select a month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="8">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="dah_home_input">
              <label htmlFor="selectInput">Selet an year:</label>
              <input type="number" onChange={(e) => setYear(e.target.value)} />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadnigMain color={"#00f69e"} />
      ) : resData.message == "No data for your provided range of days" ? (
        <div className="no_data">
          <h2>No data for your provided range of days</h2>
        </div>
      ) : (
        <div className="dashHome_container">
          {pending.length > 0 && (
            <div className="dashboard_pending_container">
              <div className={`clock_container ${openClock && "top_0"}`}>
                {clockType == "rest" && (
                  <ClockTwo
                    time={day_rest_duration}
                    setTime={setday_rest_duration}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
                {clockType == "wake" && (
                  <ClockTwo
                    time={wakeup_time}
                    setTime={setwakeup_time}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
                {clockType == "hearing" && (
                  <ClockTwo
                    time={hearing_duration}
                    setTime={sethearing_duration}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
                {clockType == "reading" && (
                  <ClockTwo
                    time={reading_duration}
                    setTime={setreading_duration}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
                {clockType == "service" && (
                  <ClockTwo
                    time={service_duration}
                    setTime={setservice_duration}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
                {clockType == "sleep" && (
                  <ClockTwo
                    time={sleep_time}
                    setTime={setsleep_time}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
                {clockType == "ch_f" && (
                  <ClockTwo
                    time={chanting_finish_time}
                    setTime={setchanting_finish_time}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
                {clockType == "ch_s" && (
                  <ClockTwo
                    time={chanting_start_time}
                    setTime={setchanting_start_time}
                    openClock={openClock}
                    setOpenClock={setOpenClock}
                  />
                )}
              </div>
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
                      value={convertToAmPm(wakeup_time)}
                      onClick={() => handleOpenClock("wake")}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Rest Duration</label>
                    <input
                      type="text"
                      value={convertToAmPm(day_rest_duration)}
                      onClick={() => handleOpenClock("rest")}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Hearing Duration</label>
                    <input
                      type="text"
                      value={convertToAmPm(hearing_duration)}
                      onClick={() => handleOpenClock("hearing")}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Reading Duration</label>
                    <input
                      type="text"
                      value={convertToAmPm(reading_duration)}
                      onClick={() => handleOpenClock("reading")}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Service Duration</label>
                    <input
                      type="text"
                      value={convertToAmPm(service_duration)}
                      onClick={() => handleOpenClock("service")}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Sleeep Time</label>
                    <input
                      type="text"
                      value={convertToAmPm(sleep_time)}
                      onClick={() => handleOpenClock("sleep")}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Chanting Finish Time</label>
                    <input
                      type="text"
                      value={convertToAmPm(chanting_finish_time)}
                      onClick={() => handleOpenClock("ch_f")}
                    />
                  </div>
                  <div className="pending_div">
                    <label htmlFor="">Chanting Start Time</label>
                    <input
                      type="text"
                      value={convertToAmPm(chanting_start_time)}
                      onClick={() => handleOpenClock("ch_s")}
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
