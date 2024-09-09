import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Upload, Select, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import useProducts from '../../Hooks/userProducts';

const Forms = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { addProduct } = useProducts();
  const [file, setFile] = useState(null); // Store file object

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('products_name', values.Product_Name);
    formData.append('description', values.Product_Description);
    formData.append('price', values.Product_Price);
    formData.append('stock_quantity', values.stock_quantity);
    formData.append('category_name', values.category);

    if (file) {
      formData.append('image', file); // Append the file object
    }

    try {
      await addProduct(formData);
      message.success('Product added successfully');
    } catch (error) {
      message.error('Error adding product');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = ({ file }) => {
    if (file.status === 'done') {
      // Handle successful upload here if needed
    }
    setFile(file.originFileObj); // Store the file object
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${apiUrl}/category`);
        setCategories(response.data.categories);
      } catch (error) {
        message.error('Failed to fetch categories');
      }
    };
    fetchCategories();
  }, []);

  return (
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
        label="Product Name"
        name="Product_Name"
        rules={[{ required: true, message: 'Please Enter Product Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product Description"
        name="Product_Description"
        rules={[{ required: true, message: 'Please Enter Product Description!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Product Price"
        name="Product_Price"
        rules={[{ required: true, message: 'Please Enter Price!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Stock Quantity"
        name="stock_quantity"
        rules={[{ required: true, message: 'Please Enter Quantity!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        extra="Upload an image for the product"
      >
        <Upload
          customRequest={({ file, onSuccess, onError }) => {
            const formData = new FormData();
            formData.append('file', file);

            // axios.post(`${process.env.REACT_APP_API_BASE_URL}/upload`, formData, {
            //   headers: { 'Content-Type': 'multipart/form-data' },
            // })
            // .then((response) => {
            //   setFile(file); // Update file state on successful upload
            //   onSuccess(response.data); // Call onSuccess to handle the upload status
            // })
            // .catch((error) => {
            //   onError(error); // Call onError to handle errors
            // });
          }}
          showUploadList={false} // Disable the default upload list
          onChange={handleChange}
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Select" name="category">
        <Select onChange={(value) => setSelectedCategory(value)}>
          {categories.map((cate, index) => (
            <Select.Option key={index} value={cate.name}>
              {cate.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Forms;
