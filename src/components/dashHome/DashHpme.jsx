import React, { useState } from "react";
import { Chart as CartJS } from "chart.js/auto";
import { Bar, Pie, Line } from "react-chartjs-2";
import "./dashHome.scss";
import { useEffect } from "react";
import axios from "axios";
import { useMainContext } from "../../utils/context";
import { useParams } from "react-router-dom";
const DashHpme = () => {
  const { baseURL, handleRefreshToken } = useMainContext();
  const [dataf, setData] = useState({});
  const { id } = useParams();
  const data = [
    {
      id: 0,
      year: 2016,
      value: 23401,
      loss: 21401,
    },
    {
      id: 1,
      year: 2017,
      value: 22401,
      loss: 24401,
    },
    {
      id: 2,
      year: 2018,
      value: 27401,
      loss: 23401,
    },
    {
      id: 3,
      year: 2018,
      value: 26010,
      value: 28010,
    },
    {
      id: 4,
      year: 2019,
      value: 20401,
      loss: 21401,
    },
    {
      id: 5,
      year: 2020,
      value: 29401,
      loss: 21401,
    },
    {
      id: 6,
      year: 2021,
      value: 24401,
      loss: 24401,
    },
  ];
  const [userData, setUserData] = useState({
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: "User Gained",
        data: data.map((item) => item.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          baseURL + `api/user/report/?user_id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res.data);
      } catch (error) {
        handleRefreshToken(
          baseURL + `api/user/report/?user_id=${id}`,
          fetchData
        );
      }
    };
    fetchData();
  }, []);
  console.log(dataf);
  return (
    <div className="dashHome_container">
      <div className="chart_container">
        <div className="chart">
          <Line data={userData} />
        </div>
      </div>
    </div>
  );
};

export default DashHpme;
