import React from 'react'
import Carosal from '../../../Components/carosal/Carosal'
import Product_Carousel from '../../../Components/Products_carosal/Product_carosal'
import Layout from '../Layout/Layout'

const Homepage = ({ user }) => {
  return (
    <Layout>
      <div>
        <Carosal />
        <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
          <Product_Carousel heading={"TOP_PRODUCTS"} url={'products/topproducts'} />
        </div>
        <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
          <Product_Carousel />
        </div>
        <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
          <Product_Carousel />
        </div>
        <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
          <Product_Carousel />
        </div>
        <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
          <Product_Carousel />
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
