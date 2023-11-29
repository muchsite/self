import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import "./one.scss";
import { useParams } from "react-router-dom";
import LoadnigMain from "../../components/loading/LoadnigMain";
import Loading from "../../components/loading/Loading";
const RetreatOne = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { retreatID } = useParams();
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
        const res = await axios.get(baseURL + `api/camps/${retreatID}/`);
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
  console.log(data);
  return (
    <>
      {loading ? <LoadnigMain /> : <div className="s_retreat_container"></div>}
    </>
  );
};

export default RetreatOne;
