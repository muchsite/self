import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Dash from "../../components/dash/Dash";

const DashOutlet = () => {
  return (
    <div className="dash_cont">
      <Dash />
      <Outlet />
    </div>
  );
};

export default DashOutlet;
