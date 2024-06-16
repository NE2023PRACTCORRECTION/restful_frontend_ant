/* eslint-disable no-unused-vars */
import React ,{useState} from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import loginIllustration from "../../assets/undraw_working_remotely_re_6b3a.svg";
import * as Yup from "yup";
import axios from "axios";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};





const SignUpForm = () => {
  
  
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
const navigate = useNavigate(); 


 const handleSubmit = async (event) => {
   event.preventDefault(); // Prevent default form submission

   const validationSchema = Yup.object().shape({
     email: Yup.string().email().required("Email is required"),
     password: Yup.string().required("password is required"),
     confirmPassword: Yup.string().required("conf password is required")
   });

   try {
     await validationSchema.validate({ email, password, confirmPassword });

     const user = {
       email,
       password,
       confirmPassword
     };

     const response = await axios.post(
       "http://localhost:5000/user/create",
       user
     );
     console.log(response.data);
     navigate("/login");
   } catch (err) {
     console.error("Error creating user", err);
   }
 };

return (
  <div className="bg-gray-100 h-screen flex items-center">
    <div
      style={{ margin: "0 auto" }}
      className="bg-white w-[80%] h-[90%] rounded-xl flex"
    >
      <div className="max-w-md h-full flex flex-col items-center justify-center p-4 ">
        <div className="pr-24">
          <h1 className="bold pb-4  text-[#6c63ff] font-bold text-2xl">
            WELCOME TO EQUIPMENT DISTRIBUTION SYSTEM
          </h1>
          <p className=" font-bold  text-xl text-[#6c63ff] ">
            Create your account to login
          </p>
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          style={{
            maxWidth: 600
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="mt-12"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!"
              }
            ]}
            className="  font-bold  "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          >
            <Input className="  w-[20vw] h-[5vh] " />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
            className="  font-bold text-[#6c63ff] "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          >
            <Input.Password className="   w-[20vw] h-[5vh]" />
          </Form.Item>

          <Form.Item
            label="ConfirmPassword"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
            className="  font-bold "
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          >
            <Input.Password className="   w-[20vw] h-[5vh]" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
            className=""
          >
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="font-bold  bg-[#6c63ff]  "
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p className="text-xl p-2 pt-4">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-xl text-primary-600 hover:underline text-[#6c63ff]"
          >
            login
          </Link>
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <img
          className="w-[70%]"
          src={loginIllustration}
          alt="Login Illustration"
        />
      </div>
    </div>
  </div>
);
};

export default SignUpForm;
