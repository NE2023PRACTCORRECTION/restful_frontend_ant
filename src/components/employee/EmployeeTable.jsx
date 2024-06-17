import { useEffect, useState } from "react";
import { Table, Button, Space, Modal, Form, Input } from "antd";
import { useLocation } from "react-router-dom";
import axios from "../../axiosInstance";
import { useRecoilValue } from "recoil";
import { searchState } from "../../store";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [form] = Form.useForm();
  const location = useLocation();
  const { createdEmployee } = location.state || {};
  const keyword = useRecoilValue(searchState);

  useEffect(() => {
    if (keyword.length === 0) {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter((employee) => {
        return (
          employee.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(keyword.toLowerCase()) ||
          employee.email.toLowerCase().includes(keyword.toLowerCase()) ||
          employee.nationalId.toLowerCase().includes(keyword.toLowerCase()) ||
          employee.telephone.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      setFilteredEmployees(filtered);
    }
  }, [keyword, employees]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all/employees");
        const allEmployees = Array.isArray(response.data) ? response.data : [];

        if (createdEmployee) {
          setEmployees([createdEmployee, ...allEmployees]);
        } else {
          setEmployees(allEmployees);
        }
      } catch (error) {
        console.error("Error fetching employees", error);
        setEmployees(createdEmployee ? [createdEmployee] : []); // handle case where fetch fails
      }
    };

    fetchEmployees();
  }, [createdEmployee]);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    form.setFieldsValue(employee);
    setIsModalVisible(true);
  };

  const handleUpdate = async () => {
    try {
      const updatedData = form.getFieldsValue();
      const response = await axios.put(
        `http://localhost:5000/employee/update/${editingEmployee.id}`,
        updatedData
      );
      console.log("Employee updated successfully:", response.data);
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === editingEmployee.id ? response.data : emp
        )
      );
      setIsModalVisible(false);
      setEditingEmployee(null);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employee/delete/${id}`);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "National ID", dataIndex: "nationalId", key: "nationalId" },
    { title: "Telephone", dataIndex: "telephone", key: "telephone" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Position", dataIndex: "position", key: "position" },
    {
      title: "Laptop Manufacturer",
      dataIndex: "laptopManufacturer",
      key: "laptopManufacturer"
    },
    { title: "Model", dataIndex: "model", key: "model" },
    { title: "Serial Number", dataIndex: "serialNumber", key: "serialNumber" },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            type="danger"
            className="bg-red-500"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      )
    }
  ];

  return (
    <>
      <Table dataSource={filteredEmployees} columns={columns} rowKey="id" />
      <Modal
        title="Edit Employee"
        open={isModalVisible} // Changed from visible to open
        onOk={handleUpdate}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="firstName" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="nationalId" label="National ID">
            <Input />
          </Form.Item>
          <Form.Item name="telephone" label="Telephone">
            <Input />
          </Form.Item>
          <Form.Item name="department" label="Department">
            <Input />
          </Form.Item>
          <Form.Item name="position" label="Position">
            <Input />
          </Form.Item>
          <Form.Item name="laptopManufacturer" label="Laptop Manufacturer">
            <Input />
          </Form.Item>
          <Form.Item name="model" label="Model">
            <Input />
          </Form.Item>
          <Form.Item name="serialNumber" label="Serial Number">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EmployeeTable; // Ensure this is a default export
