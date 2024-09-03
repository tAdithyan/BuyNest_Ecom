import React from 'react'
import Navbar from '../../../Components/NavBar/Navbar'
import Carosal from '../../../Components/carosal/Carosal'
import Categories from '../../../Components/categories/Categories'
// import Card from '../../../Components/cards/Card'
import Product_Carousel from '../../../Components/Products_carosal/Product_carosal'
import Footer from '../../../Components/Footer/Footer'
const Homepage = ({ user }) => {


  return (
    <div>
      <Navbar />
      <Categories />
      <div >
        <Carosal />

      </div>
      <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
        <Product_Carousel />
      </div>
      <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
        <Product_Carousel />
      </div>    <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
        <Product_Carousel />
      </div>    <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
        <Product_Carousel />
      </div>     <div className='flex w-full m-6 overflow-x-scroll border-2 shadow-xl rounded-xl hide-scrollbar h-fit'>
        <Product_Carousel />
      </div>
      <Footer/>

    </div>
  )
}

export default Homepage
