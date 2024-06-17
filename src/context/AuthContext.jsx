/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const unprotectedRoutes = ["", "/login", "/signup"];

export const AuthProvider = (props) => {
  // Fix children props destructuring
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && !unprotectedRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [location.pathname]);

  const login = async (email, password) => {
    const response = await axios.post(
      "http://localhost:5000/auth/user/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("response: " + response.data.token);

    if (response.data.token) {
      setIsAuthenticated(true);
      setUser(response.data.user);
      // Set the token in the headers
      axios.defaults.headers.common[
        "Authorization"
      ] = ` ${response.data.token}`;

      localStorage.setItem("token", response.data.token);
      // Navigate to the employee component after successful login
      navigate("/employee");
    }
  };

  const signup=async(email,password,confirmPassword)=>{
     const response = await axios.post(
       "http://localhost:5000/auth/user/create",
       {email,password,confirmPassword}
     );
     console.log(response.data);
     navigate("/login");
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user,signup }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};
