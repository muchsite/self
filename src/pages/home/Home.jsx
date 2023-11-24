import React, { useEffect, useState } from "react";
import Courses from "../../components/courses/Courses";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navBar/NavBar";
import Test from "../../components/test/Test";
import Events from "../../components/events/Events";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { baseURL } = useMainContext();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        setLoading(false);
        const res = await axios.get(baseURL + "api/");
        setData(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  const { courses, events, testimonials } = data;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <Hero />
          <Courses courses={courses} />
          <Events events={events} />
          <Test testimonials={testimonials} />
        </main>
      )}
    </>
  );
};

export default Home;
