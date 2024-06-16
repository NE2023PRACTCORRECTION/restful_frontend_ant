/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import loginIllustration from "../../assets/undraw_working_remotely_re_6b3a.svg";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};





const SignIn = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const navigate = useNavigate(); 


    const LoginUser = async (event) => {
      event.preventDefault();

      const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required")
      });

      try {
        await validationSchema.validate({ email, password });

        const user = { email, password };

        const response = await axios.post(
          "http://localhost:5000/auth/user/login",
          user,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        console.log("response: " + response.data.token);

        if (response.data.token) {
          // Set the token in the headers
          axios.defaults.headers.common[
            "Authorization"
          ] = ` ${response.data.token}`;

          // Navigate to the employee component after successful login
          navigate("/employee");
        } else {
          console.error("Invalid response from the server");
        }
      } catch (error) {
        console.error("Error logging in:", error);
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
             <p className=" font-bold  text-xl  text-[#6c63ff] ">Login</p>
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
               className="  font-bold "
               onChange={(e) => setEmail(e.target.value)}
               value={email}
             >
               <Input className="  w-[20vw] h-[5vh]" />
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
               className="  font-bold "
               onChange={(e) => setPassword(e.target.value)}
               value={password}
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
                 className="w-[10vw] h-[5vh] font-bold bg-[#6c63ff]  "
                 onClick={LoginUser}
               >
                 Submit
               </Button>
             </Form.Item>
           </Form>
           <p className="text-xl p-2 pt-4">
             create account !!
             <Link
               to="/signup"
               className="font-medium text-primary-600 hover:underline text-xl text-[#6c63ff]"
             >
               SignIn
             </Link>
           </p>
         </div>

         <div className="w-full flex items-center justify-center">
           <img
             className="w-[50%]"
             src={loginIllustration}
             alt="Login Illustration"
           />
         </div>
       </div>
     </div>
   );
};

export default SignIn;
