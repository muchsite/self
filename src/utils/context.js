import { useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const mainContext = createContext();

export const CreateMainContext = ({ children }) => {
  const baseURL = "https://euijkladsfiuoqew.in/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState({});
  const [mainData, setMainData] = useState({});
  const navigate = useNavigate();
  const fetchData = async (url, setData, setError) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      // setError("Error fetching data: " + error.message);
      console.log(error);
    }
  };
  const refreshToken = async (error, fetch) => {
    if (error.response && error.response.status === 401) {
      // Access token expired, attempt to refresh it here

      try {
        const refreshToken = localStorage.getItem("refresh");

        const refreshResponse = await axios.post(baseURL + "token/refresh/", {
          refresh: refreshToken,
        });
        if (refreshResponse.status === 200) {
          // Refresh successful, update the access token in localStorage
          const newAccessToken = refreshResponse.data.access;
          localStorage.setItem("token", newAccessToken);

          // Retry fetching data with the new access token
          fetch();
        } else {
          // Handle the case where token refresh fails
          console.log("Token refresh failed.");
        }
      } catch (refreshError) {
        // Handle the error that occurs during token refresh
        console.error("Token refresh error:", refreshError);
      }
    } else {
      // Handle other error cases
      console.log("Fetch error:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await axios.post(baseURL + "login/", { email, password });
      const { id, access, is_admin, is_faclitator, refresh } = res.data;
      localStorage.setItem("token", access);
      localStorage.setItem("refresh", refresh);
      if (is_admin && is_faclitator) {
        navigate(`/dashboard/admin/${id}/home`);
      }
      if (!is_admin && is_faclitator) {
        navigate(`/dashboard/facilitator/${id}/home`);
      }
      if (!is_admin && !is_faclitator) {
        navigate(`/dashboard/user/${id}/home`);
      }
      setLoginError({});
      setEmail("");
      setPassword("");
      setLoginLoading(false);
    } catch (error) {
      setLoginLoading(false);
      setLoginError(error.response.data.error);
      console.log(error);
    }
  };
  const convertTime = (timeString) => {
    let date = new Date(timeString);
    let options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };
    let formattedTime = date.toLocaleString("en-US", options);
    let day = date.toLocaleString("en-US", { day: "numeric" });
    let month = date.toLocaleString("en-US", { month: "short" });
    let all = `${month} ${day}   ${formattedTime}`;
    return {
      day: day,
      month: month,
      time: formattedTime,
      all,
    };
  };
  return (
    <mainContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        refreshToken,
        fetchData,
        baseURL,
        logInLoading,
        loginError,
        convertTime,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => useContext(mainContext);
