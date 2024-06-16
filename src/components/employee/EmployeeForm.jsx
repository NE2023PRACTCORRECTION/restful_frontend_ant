// /* eslint-disable no-unused-vars */
// import React ,{useState} from "react";
// import {
//   Button,
//   Cascader,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Mentions,
//   Select,
//   TreeSelect
// } from "antd";
// const { RangePicker } = DatePicker;
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import * as Yup from "yup";

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24
//     },
//     sm: {
//       span: 6
//     }
//   },
//   wrapperCol: {
//     xs: {
//       span: 24
//     },
//     sm: {
//       span: 14
//     }
//   }
// };
// const EmployeeForm = () => {

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [nationalId, setNationalId] = useState("");
//     const [telephone, setTelephone] = useState("");
//     const [department, setDepartment] = useState("");
//     const [position, setPosition] = useState("");
//     const [laptopManufacturer, setLaptopManufacturer] = useState("");
//     const [model, setModel] = useState("");
//     const [serialNumber, setSerialNumber] = useState("");
//     const navigate = useNavigate();


//     const handleSubmit = async (event) => {
//       event.preventDefault();

//       const validationSchema = Yup.object().shape({
//         firstName: Yup.string().required("First Name is required"),
//         lastName: Yup.string().required("Last Name is required"),
//         email: Yup.string().email().required("Email is required"),
//         nationalId: Yup.string().required("National ID is required"),
//         telephone: Yup.string().required("Telephone is required"),
//         department: Yup.string().required("Department is required"),
//         position: Yup.string().required("Position is required"),
//         laptopManufacturer: Yup.string().required(
//           "Laptop Manufacturer is required"
//         ),
//         model: Yup.string().required("Model is required"),
//         serialNumber: Yup.string().required("SerialNumber is required")
//       });
//       try {
//         await validationSchema.validate({
//           firstName,
//           lastName,
//           email,
//           nationalId,
//           telephone,
//           department,
//           position,
//           laptopManufacturer,
//           model,
//           serialNumber
//         });

//         const employee = {
//           firstName,
//           lastName,
//           email,
//           nationalId,
//           telephone,
//           department,
//           position,
//           laptopManufacturer,
//           model,
//           serialNumber
//         };
//         const response = await axios.post(
//           "http://localhost:5000/create/employee",
//           employee
//         );
//         console.log(response.data);
//         navigate("/employee");
//       } catch (err) {
//         console.error("Error creating user", err);
//       }
//     };



//   return (
//     <Form
//       {...formItemLayout}
//       variant="filled"
//       style={{
//         maxWidth: 600
//       }}
//     >
//       <Form.Item
//         label="FirstName"
//         name="firstName"
//         rules={[
//           {
//             required: true,
//             message: "Please FirstName input!"
//           }
//         ]}
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="LastName"
//         name="lastName"
//         rules={[
//           {
//             required: true,
//             message: "Please LastName input!"
//           }
//         ]}
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="NationalId"
//         name="nationalId"
//         rules={[
//           {
//             required: true,
//             message: "Please NationalId input!"
//           }
//         ]}
//         value={nationalId}
//         onChange={(e) => setNationalId(e.target.value)}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Email"
//         name="email"
//         rules={[
//           {
//             required: true,
//             message: "Please Email input!"
//           }
//         ]}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Telephone"
//         name="telephone"
//         rules={[
//           {
//             required: true,
//             message: "Please Telephone input!"
//           }
//         ]}
//         value={telephone}
//         onChange={(e) => setTelephone(e.target.value)}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Department"
//         name="department"
//         rules={[
//           {
//             required: true,
//             message: "Please Department input!"
//           }
//         ]}
//         value={department}
//         onChange={(e) => setDepartment(e.target.value)}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Position"
//         name="position"
//         rules={[
//           {
//             required: true,
//             message: "Please Position  input!"
//           }
//         ]}
//         value={position}
//         onChange={(e) => setPosition(e.target.value)}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="Manufacturer"
//         name="laptopManufacturer"
//         rules={[
//           {
//             required: true,
//             message: "Please Position  input!"
//           }
//         ]}
//         value={laptopManufacturer}
//         onChange={(e) => setLaptopManufacturer(e.target.value)}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="Model"
//         name="model"
//         rules={[
//           {
//             required: true,
//             message: "Please Position  input!"
//           }
//         ]}
//         value={model}
//         onChange={(e) => setModel(e.target.value)}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="SerialNumber"
//         name="serialNumber"
//         rules={[
//           {
//             required: true,
//             message: "Please Position  input!"
//           }
//         ]}
//         value={serialNumber}
//         onChange={(e) => setSerialNumber(e.target.value)}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 6,
//           span: 16
//         }}
//       >
//         <Button type="primary" htmlType="submit" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// }
// export default EmployeeForm;



/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const { Item: FormItem } = Form;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } }
};

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [telephone, setTelephone] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [laptopManufacturer, setLaptopManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email().required("Email is required"),
      nationalId: Yup.string().required("National ID is required"),
      telephone: Yup.string().required("Telephone is required"),
      department: Yup.string().required("Department is required"),
      position: Yup.string().required("Position is required"),
      laptopManufacturer: Yup.string().required(
        "Laptop Manufacturer is required"
      ),
      model: Yup.string().required("Model is required"),
      serialNumber: Yup.string().required("SerialNumber is required")
    });

    try {
      await validationSchema.validate({
        firstName,
        lastName,
        email,
        nationalId,
        telephone,
        department,
        position,
        laptopManufacturer,
        model,
        serialNumber
      });

      const employee = {
        firstName,
        lastName,
        email,
        nationalId,
        telephone,
        department,
        position,
        laptopManufacturer,
        model,
        serialNumber
      };

      const response = await axios.post(
        "http://localhost:5000/create/employee",
        employee
      );

      console.log(response.data);
      navigate("/employee", { state: { createdEmployee: response.data } });
    } catch (err) {
      console.error("Error creating user", err);
    }
  };

  return (
    <Form {...formItemLayout} style={{ maxWidth: 600 }}>
      <FormItem
        label="FirstName"
        name="firstName"
        rules={[{ required: true, message: "Please FirstName input!" }]}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="LastName"
        name="lastName"
        rules={[{ required: true, message: "Please LastName input!" }]}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="NationalId"
        name="nationalId"
        rules={[{ required: true, message: "Please NationalId input!" }]}
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please Email input!" }]}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Telephone"
        name="telephone"
        rules={[{ required: true, message: "Please Telephone input!" }]}
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Department"
        name="department"
        rules={[{ required: true, message: "Please Department input!" }]}
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Position"
        name="position"
        rules={[{ required: true, message: "Please Position input!" }]}
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Manufacturer"
        name="laptopManufacturer"
        rules={[{ required: true, message: "Please Manufacturer input!" }]}
        value={laptopManufacturer}
        onChange={(e) => setLaptopManufacturer(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Model"
        name="model"
        rules={[{ required: true, message: "Please Model input!" }]}
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem
        label="SerialNumber"
        name="serialNumber"
        rules={[{ required: true, message: "Please SerialNumber input!" }]}
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
      >
        <Input />
      </FormItem>

      <FormItem wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};

export default EmployeeForm;
