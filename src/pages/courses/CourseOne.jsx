import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import "./one.scss";
import { useParams } from "react-router-dom";
import LoadnigMain from "../../components/loading/LoadnigMain";
import Loading from "../../components/loading/Loading";
import { FaWindowClose } from "react-icons/fa";
import logo from "../../images/BlackLogo.png";
const CourseOne = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { courseID } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const [tId, setTId] = useState("");
  const [age, setAge] = useState("");
  const [sending, setSending] = useState(false);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + `api/course/${courseID}/`);
        setData(res.data);
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
    setError({});
    try {
      const res = await axios.post(
        baseURL + `api/course/${data.course.slug}/`,
        {
          name,
          email,
          wh_num: number,
          age,
          city,
          job,
          transaction_id: tId,
          course: data.course.id,
        }
      );
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
      setError(error.response.data);
      console.log(error);
    }
  };
  console.log(error);
  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="s_course_container">
          <div className={`s_course_form ${open && "top_0"}`}>
            <div className="form_container">
              <div className="form_images">
                <img src={logo} alt="" />
                <FaWindowClose onClick={() => setOpen(!open)} />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="s_courses_input_container">
                  <div className="s_course_input">
                    <input
                      type="text"
                      placeholder="Name:"
                      required
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </div>
                  <div
                    className={`s_course_input ${
                      "email" in error && "outline_red"
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Email:"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <p>{"email" in error && error.email}</p>
                  </div>
                  <div className="s_course_input">
                    <input
                      type="number"
                      placeholder="Nunber:"
                      required
                      value={number}
                      onChange={(e) => setNumber(e.currentTarget.value)}
                    />
                  </div>
                  <div className="s_course_input">
                    <input
                      type="text"
                      placeholder="City:"
                      required
                      value={city}
                      onChange={(e) => setCity(e.currentTarget.value)}
                    />
                  </div>
                  <div className="s_course_input">
                    <input
                      type="text"
                      placeholder="Job:"
                      required
                      value={job}
                      onChange={(e) => setJob(e.currentTarget.value)}
                    />
                  </div>
                  <div className="s_course_input">
                    <input
                      type="number"
                      placeholder="Age:"
                      required
                      value={age}
                      onChange={(e) => setAge(e.currentTarget.value)}
                    />
                  </div>
                  <div className="s_course_input">
                    <input
                      type="number"
                      placeholder="Transaction id:"
                      required
                      value={tId}
                      onChange={(e) => setTId(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="form_btn_container">
                  <button type="submit">Send</button>
                  {sending && <Loading color={"#c47843"} />}
                </div>
              </form>
            </div>
          </div>
          <div className="s_course_landing">
            <img src={data.course?.c_img} alt="" className="s_course_img" />
            <div className="s_course_info">
              <h2 className="s_course_title"> {data.course?.c_title}</h2>
              <p>Facilitator: {data.course?.facilitator}</p>
              <p>
                Price :{" "}
                {data.course?.cost > 0 ? `${data.course?.cost}$` : "FREE!"}
              </p>
              <button onClick={() => setOpen(!open)}>Register Now!</button>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: data.course?.c_desc }}
            className="s_course_desc"
          ></div>
        </div>
      )}
    </>
  );
};

export default CourseOne;
