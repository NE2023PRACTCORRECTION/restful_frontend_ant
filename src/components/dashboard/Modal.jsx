import React, { useState } from "react";
import { Button, Modal } from "antd";
import EmployeeForm from "../employee/EmployeeForm";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} color="">
        Add Employee
      </Button>
      <Modal
        title="Add Employee"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <EmployeeForm />
      </Modal>
    </>
  );
};
export default App;
