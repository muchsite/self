import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import Admin from "./pages/admin/Admin";
import Facilitator from "./pages/facilitator/Facilitator";
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import User from "./pages/user/User";
import { CreateMainContext } from "./utils/context";

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
            <Route path="/dashboard/user/:id" element={<User />} />
            <Route path="/dashboard/admin/:id" element={<Admin />} />
            <Route
              path="/dashboard/facilitator/:id"
              element={<Facilitator />}
            />
          </Routes>
        </ParallaxProvider>
      </CreateMainContext>
    </BrowserRouter>
  );
}

export default App;
