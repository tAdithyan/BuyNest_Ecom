import React from 'react';
import myImage from '../../../Accets/login.png';
import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = async (values) => {
    try {
      const apiKey = process.env.REACT_APP_API_BASE_URL;
      if (!apiKey) {
        throw new Error('API base URL is not set in environment variables');
      }

      const response = await axios.post(`${apiKey}/auth/register`, {
        user_id: values.PhoneNumber,
        username: values.UserName + values.PhoneNumber,
        email: values.Email,
        plainPassword: values.password
      });

      message.success('Registation successfully completed');
      navigate('/login')

    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Registration failed.';
      message.error(errorMessage);
    }
  };

  return (
    <div className="grid h-screen grid-cols-2">
      <div className='flex items-center justify-center bg-primary'>
        <img src={myImage} alt="Login Illustration" />
      </div>
      <div className='flex flex-col items-center justify-center m-20 border-2 border-green-400 shadow-md rounded-xl'>
        <h1 className='m-8 text-5xl font-black text-center text-secondary'>Register</h1>
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
            label="UserName"
            name="UserName"
            rules={[
              { required: true, message: 'Please input your UserName!' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ph.no"
            name="PhoneNumber"
            rules={[
              { required: true, message: 'Please input your PhoneNumber!' },
              {
                pattern: /^[+]?[0-9]{10}$/,
                message: 'Please enter a valid PhoneNumber!',
              },
            ]}
          >
            <Input type="tel" />
          </Form.Item>

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
            <p>if you have an account <Link to="/login" className='text-blue-500 underline'>Login</Link></p>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>

          {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>

          </Form.Item> */}
        </Form>
      </div>
    </div>
  );
};

export default Register;
