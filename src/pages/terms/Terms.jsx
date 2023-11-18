import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "../../components/loading/Loading";
import "./privacy.scss";
const Terms = () => {
  const [privacy_policies, setprivacy_policies] = useState({});
  const [refund, setrefund] = useState({});
  const [terms_and_conditions, setterms_and_conditions] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://growklasdklfjkl.co.in/otherpages/"
        );
        const p = DOMPurify.sanitize(res.data[0].privacy_policies);
        setprivacy_policies(p);
        const r = DOMPurify.sanitize(res.data[0].refund);
        setrefund(r);
        const t = DOMPurify.sanitize(res.data[0].terms_and_conditions);
        setterms_and_conditions(t);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, []);
  const { ref: refp, inView: inViewp } = useInView({});
  const { ref: refr, inView: inViewr } = useInView({
    threshold: 0,
  });
  const { ref: reft, inView: inViewt } = useInView({
    threshold: 0,
  });
  const ref2 = useRef();
  const ref1 = useRef();
  const ref3 = useRef();
  const scrollToElement = (ref) => {
    if (ref == 1) {
      if (ref1.current) {
        const rect = ref1.current.getBoundingClientRect();
        const offset = rect.top + window.scrollY - 100;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
    if (ref == 2) {
      if (ref2.current) {
        const rect = ref2.current.getBoundingClientRect();
        const offset = rect.top + window.scrollY - 100;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
    if (ref == 3) {
      if (ref3.current) {
        const rect = ref3.current.getBoundingClientRect();
        const offset = rect.top + window.scrollY - 100;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="privacy_container">
          <div className="privacy_links">
            <div
              className={`privacy_link ${
                inViewp && !inViewr && !inViewt && "ative_P"
              }`}
              onClick={() => scrollToElement(1)}
            >
              Privacy Policies
            </div>
            <div
              className={`privacy_link ${inViewr && !inViewt && "ative_P"}`}
              onClick={() => scrollToElement(2)}
            >
              Refunds
            </div>
            <div
              className={`privacy_link ${inViewt && "ative_P"}`}
              onClick={() => scrollToElement(3)}
            >
              Terms And conditions
            </div>
          </div>
          <div className="privacy_content">
            <div ref={ref1}></div>
            <div
              ref={refp}
              className="privacy_item"
              dangerouslySetInnerHTML={{ __html: privacy_policies }}
            ></div>
            <div ref={ref2}></div>
            <div
              ref={refr}
              className="privacy_item"
              dangerouslySetInnerHTML={{ __html: refund }}
            ></div>
            <div ref={ref3}></div>
            <div
              ref={reft}
              className="privacy_item"
              dangerouslySetInnerHTML={{ __html: terms_and_conditions }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Terms;
