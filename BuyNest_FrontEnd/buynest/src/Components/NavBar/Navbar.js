import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Space } from 'antd';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const { Search } = Input;

const Navbar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className='sticky top-0 z-50 grid h-16 grid-cols-8 shadow-lg bg-secondary'>
      <div className='flex items-center justify-center'>
        <Link to='/'>logo</Link>
      </div>
      <div className='flex items-center justify-center col-span-4 col-start-2'>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 550,
            }}
          />
        </Space>
      </div>
      <div className=''></div>
      <div className='flex flex-row items-center justify-center gap-2 text-white'>
        <button className='p-1 text-xl text-black bg-white rounded-full'>
          <FaUser />
        </button>
      </div>
      <div className='flex items-center justify-center text-xl'>
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
