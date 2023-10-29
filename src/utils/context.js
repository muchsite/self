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
  const [mainData, setMainData] = useState({});
  const navigate = useNavigate();
  const handleRefreshToken = async (url, fetchData) => {
    try {
      const refreshToken = localStorage.getItem("refresh");
      const response = await axios.post(url, {
        refreshToken: refreshToken,
      });

      const newToken = response.data.access;

      // Update the token in localStorage
      localStorage.setItem("token", newToken);

      // Retry fetching the data with the new access token
      fetchData();
    } catch (error) {
      console.error("Refresh token error: ", error);
      // You might want to handle the case where the refresh token is also expired
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post(baseURL + "login/", { email, password });
    //   const { id, access, is_admin, is_faclitator, refresh } = res.data;
    //   localStorage.setItem("token", access);
    //   localStorage.setItem("refresh", refresh);
    //   if (is_admin && is_faclitator) {
    //     navigate(`/dashboard/admin/${id}`);
    //   }
    //   if (!is_admin && is_faclitator) {
    //     navigate(`/dashboard/facilitator/${id}`);
    //   }
    //   if (!is_admin && !is_faclitator) {
    //     navigate(`/dashboard/user/${id}`);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    if (email == "a") {
      navigate(`/dashboard/admin/${password}/home`);
    }
    if (email == "s") {
      navigate(`/dashboard/user/${password}/home`);
    }
    if (email == "f") {
      navigate(`/dashboard/facilitator/${password}/home`);
    }
  };

  return (
    <mainContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        handleRefreshToken,
        baseURL,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => useContext(mainContext);
