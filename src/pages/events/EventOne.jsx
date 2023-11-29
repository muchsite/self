import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import "./one.scss";
import { useParams } from "react-router-dom";
import LoadnigMain from "../../components/loading/LoadnigMain";
import Loading from "../../components/loading/Loading";
const EventOne = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { eventID } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const [tId, setTId] = useState("");
  const [age, setAge] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + `api/event/${eventID}/`);
        setData(res.data.course);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await axios.post(baseURL + `api/event/${data.slug}/`, {
        name,
        email,
        wh_num: number,
        age,
        city,
        job,
        transaction_id: tId,
        course: data.id,
      });
      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setCity("");
      setJob("");
      setTId("");
      setNumber("");
      setAge("");
      alert("Message has been sent");
    } catch (error) {
      setSending(false);
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="s_event_container">
          <h2>{data.event}</h2>
          <img src={data.e_img} alt="" />
          <div className="s_event_info">
            <p>{data.cost}</p>
            <p>{data.date_time}</p>
          </div>
          <div className="s_event_desc">
            <div dangerouslySetInnerHTML={{ __html: data.details }}></div>
          </div>
          <div className="s_event_form">
            <form onSubmit={handleSubmit}>
              <div className="s_event_input_container">
                <div className="s_event_input">
                  <input
                    type="text"
                    placeholder="Name:"
                    required
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="s_event_input">
                  <input
                    type="text"
                    placeholder="Email:"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div className="s_event_input">
                  <input
                    type="number"
                    placeholder="Nunber:"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.currentTarget.value)}
                  />
                </div>
                <div className="s_event_input">
                  <input
                    type="text"
                    placeholder="City:"
                    required
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                  />
                </div>
                <div className="s_event_input">
                  <input
                    type="text"
                    placeholder="Job:"
                    required
                    value={job}
                    onChange={(e) => setJob(e.currentTarget.value)}
                  />
                </div>
                <div className="s_event_input">
                  <input
                    type="number"
                    placeholder="Age:"
                    required
                    value={age}
                    onChange={(e) => setAge(e.currentTarget.value)}
                  />
                </div>
                <div className="s_event_input">
                  <input
                    type="number"
                    placeholder="Transaction id:"
                    required
                    value={tId}
                    onChange={(e) => setTId(e.currentTarget.value)}
                  />
                </div>
              </div>
              <button type="submit">Send</button>
              {sending && <Loading />}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EventOne;
