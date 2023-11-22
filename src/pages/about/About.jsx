import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/LoadnigMain";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import ab from "../../images/ab.jpg";
import "./about.scss";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
const About = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + "api/aboutus");
        const sortArrayById = (array) => array.sort((a, b) => a.id - b.id);
        const d = sortArrayById(res.data);
        setData(d);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="about_container">
          <div className="about_item_container item_about">
            <img src={ab} alt="" className="about_back" />
            <div className="about_info">
              <h2 className="about_title">{data[0]?.section_heading}</h2>
              <div
                className="about_html"
                dangerouslySetInnerHTML={{ __html: data[0]?.section_content }}
              ></div>
            </div>
          </div>
          <div className="about_item_container item_mission">
            <img src={ab} alt="" />
            <div className="mission_info">
              <h2>{data[1]?.section_heading}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: data[1]?.section_content }}
              ></div>
            </div>
          </div>
          <div className="about_item_containee item_inspiration_container">
            <h2>Inspirations</h2>
            <div className="item_inspiration">
              <img src={data[2]?.section_image} alt="" />
              <div
                dangerouslySetInnerHTML={{ __html: data[2]?.section_content }}
              ></div>
            </div>
            <div className="item_inspiration item_inspiration_reverse">
              <img src={data[3]?.section_image} alt="" />
              <div
                dangerouslySetInnerHTML={{ __html: data[3]?.section_content }}
              ></div>
            </div>
          </div>
          <div className="about_item_container item_ambition_container">
            <img src={ab} alt="" />
            <div className="about_item">
              <h2>{data[4]?.section_heading}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: data[4]?.section_content }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
