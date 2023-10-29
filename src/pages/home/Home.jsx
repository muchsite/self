import React from "react";
import Courses from "../../components/courses/Courses";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navBar/NavBar";
import Test from "../../components/test/Test";

const Home = () => {
  return (
    <main>
      <Hero />
      <Courses />
      <Test />
    </main>
  );
};

export default Home;
