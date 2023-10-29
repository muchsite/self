import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.scss";
import DashHome from "./components/dashHome/DashHome";
import DashProfile from "./components/dashProfile/DashProfile";
import DashGroup from "./components/dashGroup/DashGroup";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import DashOutlet from "./pages/dashOutlet/DashOutlet";
import { CreateMainContext } from "./utils/context";
import DashAll from "./components/dashAll/DashAll";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });
    lenis.on("scroll", (e) => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <CreateMainContext>
        <ParallaxProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard/:role/:id" element={<DashOutlet />}>
              <Route path="home" element={<DashHome />} />
              <Route path="profile" element={<DashProfile />} />
              <Route path="allgroups" element={<DashAll />} />
              <Route path="allgroups/group" element={<DashGroup />} />
              <Route path="group" element={<DashGroup />} />
            </Route>
          </Routes>
        </ParallaxProvider>
      </CreateMainContext>
    </BrowserRouter>
  );
}

export default App;
