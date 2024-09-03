import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex gap-5  overflow-x-scroll hide-scrollbar ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <p className='p-1 m-2 font-extrabold text-secondary hover:underline'>Fruits</p>
      <p className='p-1 m-2 font-extrabold text-secondary hover:underline'>Fruits</p>
      <p className='p-1 m-2 font-extrabold text-secondary hover:underline'>Fruits</p>
      <p className='p-1 m-2 font-extrabold text-secondary hover:underline'>Fruits</p>
      <p className='p-1 m-2 font-extrabold text-secondary hover:underline'>Fruits</p>
      <p className='p-1 m-2 font-extrabold text-secondary hover:underline'>Fruits</p>
      <p className='p-1 m-2 font-extrabold text-secondary hover:underline'>Fruits</p>
    </div>
  );
};

export default Categories;
