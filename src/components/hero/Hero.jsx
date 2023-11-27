import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import m from "../../images/m.png";
import man from "../../images/man.png";
import over from "../../images/over.png";
import "./hero.scss";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero_container">
      <ParallaxBanner
        style={{ width: "100%", height: "110vh", objectFit: "cover" }}
      >
        <div className="hero_content">
          <h1>Website’s Main Title should Go here</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <Link to="/login">JOIN US</Link>
        </div>
        <ParallaxBannerLayer speed={10}>
          <img
            src={m}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={20}>
          <img
            src={over}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={0} className="man">
          <img src={man} alt="" />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default Hero;
