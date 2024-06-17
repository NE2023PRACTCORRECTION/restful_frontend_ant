// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AppProvider = (children ) => {
//   console.log("Children:", children); // Log children to debug
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);

//   return <>{children}</>;
// };

// export default AppProvider;


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppProvider = ( children ) => {
  // Fix children props destructuring
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default AppProvider;
