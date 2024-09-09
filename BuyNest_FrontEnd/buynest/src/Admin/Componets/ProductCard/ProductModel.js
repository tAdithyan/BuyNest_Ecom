import React from 'react';
import { Modal, Input, InputNumber, Upload, Button, Dropdown, Space } from 'antd';
import { UploadOutlined, DownOutlined } from '@ant-design/icons';
import { Checkbox, Form } from 'antd';

const { TextArea } = Input;

const ProductModal = ({
  isAddmenu,
  modal2Open,
  setModal2Open,
  formData,
  handleChange,
  handleNumberChange,
  uploadProps,
  menuProps,
  handleSubmit,
}) => {
  return (
    <>
    <Modal
      title={isAddmenu ? "ADD PRODUCT" : "Edit Product"}
      centered
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
    >
      <form onSubmit={handleSubmit}>
        <p>Product Name</p>
        <Input
          placeholder="Product Name"
          name="products_name"
          onChange={handleChange}
          value={formData.products_name} />
        <p>Description</p>
        <TextArea
          rows={4}
          placeholder="Max length is 50"
          maxLength={50}
          name="description"
          value={formData.description}
          onChange={handleChange} />
        <p>Price:</p>
        <InputNumber
          min={1}
          max={10000}
          value={formData.price}
          onChange={(value) => handleNumberChange(value, "price")} />
        <p>Stock Quantity:</p>
        <InputNumber
          min={1}
          max={10000}
          value={formData.stock_quantity}
          onChange={(value) => handleNumberChange(value, "stock_quantity")} />
        <p>Upload Image:</p>
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <p>Category:</p>
        <Space wrap>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                {formData.category || "Select Category"}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
        <Button type="primary" htmlType="submit" className='mt-4'>
          {isAddmenu ? "Add Product" : "Update Product"}
        </Button>
      </form>
    </Modal>
    </>
    )
    }
 export default ProductModal;
