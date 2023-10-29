import React from "react";
import { Link } from "react-router-dom";

const DashAll = () => {
  return (
    <div>
      <h1 style={{ color: "green" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
        nostrum quos et unde, dolorum reprehenderit! Voluptas delectus nulla,
        blanditiis, repellendus, ipsam qui alias eius a porro ab quod. Ipsa,
        fugit?
      </h1>
      <Link to="group">single group</Link>
    </div>
  );
};

export default DashAll;
