import React from "react";
import "./loading.scss";
const Loading = ({ color }) => {
  return (
    <div className="l_container">
      <div className="l_content">
        <div className="load-wrapp">
          <div className="load-4">
            <div
              className="ring-1"
              style={{ border: `7px dashed ${color}` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
