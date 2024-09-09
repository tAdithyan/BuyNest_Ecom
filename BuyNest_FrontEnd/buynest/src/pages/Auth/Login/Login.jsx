import React, { useState } from 'react';
import myImage from '../../../Accets/login.png';
import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = ({ setUser }) => {
  const [isAdmin, SetAdmin] = useState(false)

  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const apiKey = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${apiKey}/auth/login`, {
        email: values.Email,
        plainPassword: values.password,
      });

      console.log(response.data.user.role)
      if (response.data.user.role == "admin") {

        message.success('Login successful');
        navigate('/Admin/Dashboard');
      }
      else {
        message.success('Login successful');
        navigate('/');
      }
      setUser(values.Email)



    } catch (error) {
      message.error('Login failed');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="grid h-screen grid-cols-2">
      <div className='flex items-center justify-center bg-primary'>
        <img src={myImage} alt="Login Illustration" />
      </div>
      <div className='flex flex-col items-center justify-center m-20 border-2 border-green-400 shadow-md rounded-xl'>
        <h1 className='m-8 text-5xl font-black text-center text-secondary'>Login</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>


          <div className='flex flex-col items-center justify-center '>
            <p>Don't have an account? <Link to="/register" className='text-blue-500 underline'>Register</Link></p>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
};

export default Login;
