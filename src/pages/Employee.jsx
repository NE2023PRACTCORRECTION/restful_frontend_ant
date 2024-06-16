/* eslint-disable no-unused-vars */
import React from "react";

import NavBar from "../components/dashboard/Navbar";
import SideBar from "../components/dashboard/SideBar";
import Modal from "../components/dashboard/Modal";
import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeTable from "../components/employee/EmployeeTable";

const Employee  = () => {
    return (
    <div >
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Modal></Modal>
        <EmployeeTable></EmployeeTable>

      
      </div>
    );
}
export default Employee ;