import { useRef } from 'react';
import Card from '../cards/Card';

const Product_Carousel = () => {


  return (
    <div className='relative p-6 '>
      <p className='text-2xl font-bold text-secondary'>Fruites</p>

      <div
        className='flex overflow-x-scroll overflow-y-hidden hide-scrollbar  items-center justify-center  w-full h-[50vh]'

      >
        <div className='flex-none w-[300px] h-full'>
          <Card />
        </div>
        <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div> <div className='flex-none w-[300px] h-full'>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Product_Carousel;
