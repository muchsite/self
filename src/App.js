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
import DashHomeForAdmin from "./components/dashHome/DashHomeForAdmin";
import Privacy from "./pages/terms/Privacy";
import Conditions from "./pages/terms/Conditions";
import Refund from "./pages/terms/Refund";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Conditions />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/dashboard/:role/:id" element={<DashOutlet />}>
              <Route path="home" element={<DashHome />} />
              <Route path="profile" element={<DashProfile />} />
              <Route path="allgroups" element={<DashAll />} />
              <Route path="allgroups/:groupId" element={<DashGroup />} />
              <Route
                path="allgroups/:groupId/student"
                element={<DashHomeForAdmin />}
              />
            </Route>
          </Routes>
          <Footer />
        </ParallaxProvider>
      </CreateMainContext>
    </BrowserRouter>
  );
}

export default App;
