import React from 'react';
import { LuPencilLine } from "react-icons/lu";
import { IoTrashBinSharp } from "react-icons/io5";
import { Popconfirm } from 'antd';
import defaultimg from '../../../Accets/login.png'

const ProductCard = ({ product, showPopconfirm, handleOk, handleCancel, confirmLoading, open, Editproduct }) => {
  return (
    <div className='grid grid-cols-4 border rounded-xl min-h-20 border-secondary'>
      <div className='flex items-center justify-center object-fit'>
        <img src={defaultimg} alt={product.name} height={150} width={150} />
      </div>
      <div className='flex items-center justify-center'>
        <p>{product.products_name}</p>
      </div>
      <div className='flex items-center justify-center'>
        <p>Price: {product.price}</p>
      </div>
      <div className='flex items-center justify-center gap-8'>
        <button className='p-2 border border-secondary rounded-xl' onClick={Editproduct}>
          <LuPencilLine />
        </button>
        <Popconfirm
          title="Delete"
          description="Are you sure you want to delete this item?"
          open={open === product.id}
          onConfirm={handleOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancel}
        >
          <button className='p-2 border border-secondary rounded-xl' onClick={() => showPopconfirm(product.id)}>
            <IoTrashBinSharp />
          </button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default ProductCard;
