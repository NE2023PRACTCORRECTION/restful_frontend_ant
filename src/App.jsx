import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";

// import Employee from "./pages/Employee";
// import EmployeeTable from "./components/employee/EmployeeTable";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Employee from "./pages/Employee";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />}></Route>
        {/* <Route path="/employeeTable" element={<EmployeeTable />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
