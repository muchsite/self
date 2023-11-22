import React from "react";

const LoadnigMain = ({ color }) => {
  return (
    <div className="main_l_container">
      <h2 style={{ color: color ? color : "#c47843" }}>Loading...</h2>
      <div className="l_content">
        <div className="load-wrapp">
          <div className="load-4">
            <div
              className="ring-1"
              style={{ border: `10px dashed ${color ? color : "#c47843"}` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadnigMain;
