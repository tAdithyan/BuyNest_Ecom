import React, { useEffect, useState } from 'react';
import defaultmg from '../../Accets/login.png';
import { LuPencilLine } from "react-icons/lu";
import { IoTrashBinSharp } from "react-icons/io5";
import { Modal, Popconfirm, Button, Dropdown, Space, message, Upload } from 'antd';
import { DownOutlined, UploadOutlined } from '@ant-design/icons';
import { Input, InputNumber } from 'antd';
import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import Forms from '../../Components/Forms/Forms';

const { TextArea } = Input;

const Admin_Product_ManageMent = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [openPopconfirm, setOpenPopconfirm] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isAddmenu, setAddmenu] = useState(true);

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/products/allproducts/`);
        console.log("Products response", response);
        setProducts(response.data.productDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [openPopconfirm]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/category`);
        console.log("Categories response", response);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const showPopconfirm = (productId) => {
    setOpenPopconfirm(productId); // Set the specific product ID to open the confirmation
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const response = await axios.delete(`${apiUrl}/products/deleteproduct/${openPopconfirm}`);
      console.log("Delete response", response);
      setProducts(Products.filter(product => product.id !== openPopconfirm));
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setConfirmLoading(false);
      setOpenPopconfirm(null);
    }
  };

  const handleCancel = () => {
    setOpenPopconfirm(null); // Close the pop-up when canceled
  };

  const uploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('Menu item clicked', e);
  };

  const items = categories.map((category, index) => ({
    label: category.name,
    key: index.toString(),
  }));

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const addProduct = () => {
    setModal2Open(true);
    setAddmenu(true);
  };

  const editProduct = () => {
    setModal2Open(true);
    setAddmenu(false);
  };

  return (
    <>
      <div className='my-4 text-2xl text-black'>Product Management</div>
      <button
        className='flex items-center gap-2 p-2 bg-[#ffff] border border-red-800 rounded-xl'
        onClick={() => addProduct()}
      >
        ADD PRODUCT <FaPlus />
      </button>
      <Input placeholder="Basic usage" className='mt-5' />
      <div className='grid grid-cols-1 gap-5 mt-10'>
        {Products.map(product => (
          <div key={product.product_id} className='grid grid-cols-4 border rounded-xl min-h-20 border-secondary'>
            <div className='flex items-center justify-center object-fit'>
              <img src={product.image_url ? product.image_url : defaultmg} alt={product.name} height={150} width={150} />
            </div>
            <div className='flex items-center justify-center '>
              <p>{product.products_name}</p>
            </div>
            <div className='flex items-center justify-center '>
              <p>Price: {product.price}</p>
            </div>
            <div className='flex items-center justify-center gap-8'>
              <button
                className='p-2 border border-secondary rounded-xl'
                onClick={() => editProduct()}
              >
                <LuPencilLine />
              </button>
              <Popconfirm
                title="Delete"
                description="Are you sure you want to delete this item?"
                open={openPopconfirm === product.product_id}
                onConfirm={handleOk}
                okButtonProps={{ loading: confirmLoading }}
                onCancel={handleCancel}
              >
                <button
                  className='p-2 border border-secondary rounded-xl'
                  onClick={() => showPopconfirm(product.product_id)}
                >
                  <IoTrashBinSharp />
                </button>
              </Popconfirm>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title={isAddmenu ? "ADD PRODUCT" : "Edit product"}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        {isAddmenu ? (
          <Forms />
        ) : (
          <Forms />
        )}
      </Modal>
    </>
  );
};

export default Admin_Product_ManageMent;
